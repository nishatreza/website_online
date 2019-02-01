
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import * as _ from "lodash";
import { AuthService } from '../../../shared/services/auth.service';




@Component({
  selector: 'app-freelancer-grid-new',
  templateUrl: './freelancer-grid-new.component.html',
  styleUrls: ['./freelancer-grid-new.component.css']
})
export class FreelancerGridNewComponent implements OnInit {
  filters = {};
  favorite: any;
  services: any;
  // firestoreService:Observable<any[]>;
  favouriteDoc: any;
  
  basicDeliveryTime: string;
 
  basicCost: number;
  
  
  filteredServices: any;
  email: any;
  marketPageObservable: Observable<any[]>;
  pageData: any;
  public marketPageCollection: AngularFirestoreCollection<any>;
  marketCategory: string;
  loggedInUser: any;
  uid: string;


  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore, public authService: AuthService) {


  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.marketCategory = this.route.snapshot.params['service'];
    this.authService.user.subscribe(
      user => {
        this.email = user.email;
        console.log("email", this.email);
        this.uid = user.uid;
        console.log('uid', this.uid);
        //  this.showFavButton(this.email);



      });
    this.setPageData(this.marketCategory);

  }
  // showFavButton(email) {
  //   if (email == this.pageData.madeByFavoriteUserEmail) {
  //     console.log("email", this.pageData.madeByFavoriteUserEmail);
  //     this.isFavorite = true;
  //   }
  //   else {
  //     this.isFavorite = false;
  //   }
  // }
 
  setPageData(category) {
    this.marketPageCollection = this.afs.collection('serviceInfo', ref => ref.where('url', '==', category));
    this.marketPageObservable = this.marketPageCollection.valueChanges();
    this.marketPageObservable.subscribe(marketPageData => {
      this.pageData = marketPageData;
      console.log("pageData", this.pageData);
      // this.showFavButton(this.authService.loggedInUser.email);
      console.log('hi', this.authService.loggedInUser.email);
      this.applyFilters();

    })
  }
  
  filterLessGreaterThan(property: string, rule: number) {
    console.log(property, rule);
    if (rule <= 1000) {
    this.filters[property] = val => val >= 0 && val <= 1000;
      this.applyFilters();
    }

    if (rule > 1000 && rule <= 5000) {
    this.filters[property] = val => val > 1000 && val <= 5000;
      this.applyFilters();
    }
    if (rule > 5000) {
    this.filters[property] = val => val > rule;
      this.applyFilters();
    }
  }
  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    console.log(property, rule);
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }
  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
  

  
 

  filterExact(property: string, rule: any) {
   
    console.log(property, rule);
    this.filters[property] = val => val == rule
    this.applyFilters()
  }
  private applyFilters() {
    this.filteredServices = _.filter(this.pageData, _.conforms(this.filters))
    console.log('filterdata', this.filteredServices);
    
  }
}
