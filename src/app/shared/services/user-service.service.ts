import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {ServicePage} from '../models/servicePage';
import 'rxjs/add/operator/switchMap';
import { Subscriber } from 'rxjs/Subscriber';
import {Router} from '@angular/router';

@Injectable()
export class UserServiceService {
  // serviceUser: Observable<ServicePage>;
  serviceCollection: AngularFirestoreCollection<ServicePage>;
  service: Observable<ServicePage>;
  serviceDoc: AngularFirestoreDocument<ServicePage>;

  constructor(
    private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router
  ) {
    this.serviceCollection = this.afs.collection('services');
    
   }

   addItem(item: ServicePage){
    this.serviceCollection.add(item);
}

  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${serviceUser.uid}`);
  //   const data: ServicePage = {
    
  //     name: serviceUser.name,
  //     description: serviceUser.description,
  //     // userName: user.userName,
  //     charge: serviceUser.charge,
  //     deliveryTime: serviceUser.deliveryTime
 
  //   }
  //   return userRef.set(data, { merge: true })
  // }




}