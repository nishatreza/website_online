import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import * as _ from "lodash";
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-favourite-services',
  templateUrl: './user-favourite-services.component.html',
  styleUrls: ['./user-favourite-services.component.css']
})
export class UserFavouriteServicesComponent implements OnInit {
  isFavorite: boolean = false;
  @Input() uid:string;
  @Input() serviceId:string;
  favoriteService:any;
 favoriteId:any;

  favouriteObservable: Observable<any[]>;
  pageData:any;
  public favouriteCollection: AngularFirestoreCollection<any>;
  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
    window.scroll(0,0);
    console.log(this.uid);
    this.setPageData();

  }
  addToFavorite() {

    this.isFavorite=true;
    this.favoriteId=this.createId();
    const favoriteService: any = {
      uid: this.uid,
      favoriteId:this.favoriteId,
      serviceId:this.serviceId
    
    }
    
      const collectionRef = this.afs.collection('favouriteServices');
      collectionRef.doc(this.favoriteId).set(favoriteService);
      console.log("favorite", favoriteService);
    

  }
  public deleteDocument(uid, collectionName) {
    const collectionRef = this.afs.collection(collectionName);
    return collectionRef.doc(uid).delete();
  }

  createId() {
    return this.afs.createId();
  }
  setPageData() {
    this.favouriteCollection = this.afs.collection('favouriteServices', ref => ref.where('uid', '==', this.uid));
    this.favouriteObservable = this.favouriteCollection.valueChanges();
    this.favouriteObservable.subscribe(favouritePageData => {
      this.pageData = favouritePageData;
      console.log("pageData", this.pageData);
     
      console.log('hi', this.authService.loggedInUser.email);
     

    })
  }
}
