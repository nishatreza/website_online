import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-freelancer-by-category-header',
  templateUrl: './freelancer-by-category-header.component.html',
  styleUrls: ['./freelancer-by-category-header.component.css']
})
export class FreelancerByCategoryHeaderComponent implements OnInit {
  marketPageObservable:Observable<any[]>;
  
  pageInfo: any;
  serviceItems: any;
  public marketPageCollection:AngularFirestoreCollection<any>;

  


  marketCategory: string;
 
  constructor(private route: ActivatedRoute,private router:Router, private afs:AngularFirestore) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.marketCategory = this.route.snapshot.params['service'];
   
    //  this.setPageData(this.marketCategory);

  
  
    this.marketPageCollection = this.afs.collection('serviceHeader',ref => ref.where('url', '==',this.marketCategory));
    this.marketPageObservable = this.marketPageCollection.valueChanges();
    this.marketPageObservable.subscribe(marketPageData => {
      console.log("marketpagedata",marketPageData);
       this.pageInfo = marketPageData;
     
      console.log("pageData",this.pageInfo);
    })
  }
}
