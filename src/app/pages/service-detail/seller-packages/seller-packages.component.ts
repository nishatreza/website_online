import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Component({
  selector: 'app-seller-packages',
  templateUrl: './seller-packages.component.html',
  styleUrls: ['./seller-packages.component.css']
})
export class SellerPackagesComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsedTwo =true;
  public isCollapsedThree=true;
  marketPageObservable: Observable<any[]>;
  marketCategory: string;
  pageData: any;
  serviceItems: any;
  public marketPageCollection: AngularFirestoreCollection<any>;
  constructor(private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore) { }

  ngOnInit() {
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
