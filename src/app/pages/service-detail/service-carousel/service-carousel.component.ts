import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../shared/services/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.css']
})
export class ServiceCarouselComponent implements OnInit {
  marketPageObservable:Observable<any[]>;
  emailObservable:Observable<any[]>;
  updateService:boolean = false;
  edit:boolean =false;
  loggedInUser:any;
  pageData: any;
  serviceDetail:any;
  email:string;
  public marketPageCollection:AngularFirestoreCollection<any>;
  public emailCollection:AngularFirestoreCollection<any>;
  
  constructor(  private activatedRoute: ActivatedRoute, 
    private afs:AngularFirestore, public authService:AuthService) {   
     }
 
  serviceId: string;
  ngOnInit() {
    this.serviceId = this.activatedRoute.snapshot.params['serviceId'];
    this.setPageData(this.serviceId);
    this.authService.user.subscribe(
      user => {
        this.email = user.email;
     
        this.editButton(this.email);
        
     
    });
   
    //  this.onRouteChange();
 
  
  
    
  }

  
  onRouteChange() {
    this.activatedRoute.params.subscribe((params ) => {
     const category = params.type;
       console.log(category);
  });
  } 
    
    editButton(email:any){
      if(email==this.pageData.email){
      console.log("email",this.pageData.email);
      this.edit=true;
      }
    }
    
  
 
    setPageData(serviceId:any){
      this.marketPageCollection = this.afs.collection('serviceInfo',ref => ref.where('serviceId', '==', serviceId));
      this.marketPageObservable = this.marketPageCollection.valueChanges();
      this.marketPageObservable.subscribe(marketPageData => {
         this.pageData = marketPageData[0];
        console.log('this is page data',this.pageData);
      
       
      })
     
    }
   
   
  }


