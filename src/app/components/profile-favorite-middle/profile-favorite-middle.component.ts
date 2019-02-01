import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-profile-favorite-middle',
  templateUrl: './profile-favorite-middle.component.html',
  styleUrls: ['./profile-favorite-middle.component.scss']
})
export class ProfileFavoriteMiddleComponent implements OnInit {
  public favouriteCollection: AngularFirestoreCollection<any>;
  favouriteServiceObservable:Observable<any[]>;
  pageData:any;
  loggedInUser:any;
  constructor(private afs:AngularFirestore,private auth:AuthService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.setPageData();
  }
  setPageData(){
    this.favouriteCollection = this.afs.collection('userFavourite',ref => ref.where('madeByFavoriteUserEmail', '==',this.auth.loggedInUser.email));
    this.favouriteServiceObservable = this.favouriteCollection.valueChanges();
    this.favouriteServiceObservable.subscribe(favouritePageData => {
       this.pageData = favouritePageData;
      console.log("pageData",this.pageData);
     
     
    })
    
  }

}
