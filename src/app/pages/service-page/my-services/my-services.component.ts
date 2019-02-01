import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  
  serviceObservable: Observable<any[]>;
  services: Observable<any[]>;
  returnUrl;
  loggedInUser: any;
  servicePageData: any;
  createService: any;
  public serviceCollection: AngularFirestoreCollection<any>;
  constructor(private route: Router, private afs: AngularFirestore, public authService: AuthService, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.onRouteChange();

    this.authService.user.subscribe(
      user => {
      this.loggedInUser = user;
        console.log(this.loggedInUser);
        this.setPageData(this.loggedInUser.email)
      })

  }
  public deleteDocument(uid) {
    const collectionRef = this.afs.collection('serviceInfo');
    collectionRef.doc(uid).delete();
    alert('Your service is deleted.');
    this.route.navigate(['/services']);

  }
  setPageData(email: any) {
    this.serviceCollection = this.afs.collection('serviceInfo', ref => ref.where('email', '==', email));
    this.serviceObservable = this.serviceCollection.valueChanges();
    this.serviceObservable.subscribe(serviceData => {
      console.log('serviceData', serviceData);
      this.servicePageData = serviceData;
      this.createService = this.servicePageData.studentReviews;
      console.log('servicePageData', this.servicePageData);


    })
  }

  onRouteChange() {
    this.activatedRoute.params.subscribe((params) => {
      const category = params.type;
      console.log(category);
    });
  }

}

