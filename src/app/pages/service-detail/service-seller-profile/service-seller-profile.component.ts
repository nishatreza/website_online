import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-service-seller-profile',
  templateUrl: './service-seller-profile.component.html',
  styleUrls: ['./service-seller-profile.component.css']
})
export class ServiceSellerProfileComponent implements OnInit {
  emailObservable: Observable<any[]>;
  profileObservable: Observable<any[]>;
  loggedInUser: any;
  @Input() email: string;
  sellerProfileData: any;
  public profileCollection: AngularFirestoreCollection<any>;
  public emailCollection: AngularFirestoreCollection<any>;
  constructor(private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
    // this.authService.user.subscribe(
    //   user => {
    //     this.email = user.email;

    //    /*  this.editButton(this.email); */
    //     this.setSellerProfile(this.email);
    //   });
    this.setSellerProfile(this.email)
  }
  setSellerProfile(email: any) {
    this.profileCollection = this.afs.collection('users', ref => ref.where('email', '==', email));
    this.profileObservable = this.profileCollection.valueChanges();
    this.profileObservable.subscribe(profileData => {
      console.log('profileData', profileData);
      this.sellerProfileData = profileData[0];
    })
  }

}
