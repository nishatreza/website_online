import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

   marketPageObservable:Observable<any[]>;
  
   pageData: any;
   serviceItems: any;
   public marketPageCollection:AngularFirestoreCollection<any>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private afs:AngularFirestore) {
   
   }

  ngOnInit() {
    this.onRouteChange();
  }


  setPageData(category){
    this.marketPageCollection = this.afs.collection('marketPages',ref => ref.where('category', '==', category));
    this.marketPageObservable = this.marketPageCollection.valueChanges();
    this.marketPageObservable.subscribe(marketPageData => {
      console.log(marketPageData);
      this.pageData = marketPageData[0];
      this.serviceItems = this.pageData.serviceItems;
    })
  }

  onRouteChange() {
    this.activatedRoute.params.subscribe((params ) => {
     const category = params.type;
    this.setPageData(category);
      console.log(category);
  });
  }


}
