import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-package-seller-profile',
  templateUrl: './package-seller-profile.component.html',
  styleUrls: ['./package-seller-profile.component.css']
})
export class PackageSellerProfileComponent implements OnInit {
  marketPageObservable: Observable<any[]>;

  pageData: any;
  serviceItems: any;
  public marketPageCollection: AngularFirestoreCollection<any>;
  constructor(private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore) { }
  marketCategory: string;
  ngOnInit()
  {
  this.marketCategory = this.activatedRoute.snapshot.params['serviceId'];
    this.setPageData(this.marketCategory);
  }
  setPageData(serviceId: any) {
    this.marketPageCollection = this.afs.collection('serviceInfo', ref => ref.where('serviceId', '==', serviceId));
    this.marketPageObservable = this.marketPageCollection.valueChanges();
    this.marketPageObservable.subscribe(marketPageData => {
      console.log('this is marketpage data', marketPageData);
      this.pageData = marketPageData[0];
      console.log('this is page data', this.pageData);
      // this.serviceItems = this.pageData.serviceItems;
    })
  }

}
