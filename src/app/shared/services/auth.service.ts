import { Injectable } from '@angular/core';
import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/operator/switchMap';
import { Subscriber } from 'rxjs/Subscriber';
import { Router } from '@angular/router';
// import { Service } from '../../shared/models/service'




@Injectable()
export class AuthService {
  loggedInUser: any;
  user: Observable<User>;
  
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
           this.loggedInUser = user;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
      
  }
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }


  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
  emailSignUp(userData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)

      .then((user) => {
        user.userName = userData.userName
        this.updateUserData(user)

      });
  }

  emailSignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    let roles: any = {};
    if (user.roles) {
      if (user.roles.subscriber) {
        roles.subscriber = true;
      } else {
        roles.subscriber = false;
      }
      if (user.roles.editor) {
        roles.editor = true;
      } else {
        roles.editor = false;
      }
      if (user.roles.admin) {
        roles.admin = true;
      } else {
        roles.admin = false;
      }

    }

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      // userName: user.userName,
      userName: user.userName || user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles
    }
    return userRef.set(data, { merge: true })

  }

  

 
}
