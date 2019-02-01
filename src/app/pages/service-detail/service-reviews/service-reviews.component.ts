import { Component, OnInit } from '@angular/core';
//import { FireStoreUtilService } from '../../../shared/services/fire-store-util.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators, AbstractControl, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AUTH_PROVIDERS } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-service-reviews',
  templateUrl: './service-reviews.component.html',
  styleUrls: ['./service-reviews.component.css']
})
export class ServiceReviewsComponent implements OnInit {
  modal: boolean = false;
  returnUrl;
  updateCommentForm: FormGroup;
  loggedInUser: any;
  service: any;
 
  public serviceCollection: AngularFirestoreCollection<any>;
  public commentCollection:AngularFirestoreCollection<any>;
  serviceObservable: Observable<any[]>;
  commentObservable: Observable<any[]>;
  pageData: any;
  commentData:any;
  SERVICE_COLLECTION: string = 'serviceInfo';

  constructor(private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    //private fsu: FireStoreUtilService,
    private db: AngularFirestore,
    /*  private storage: AngularFireStorage, */
    private afs: AngularFirestore,
    private auth: AuthService,
    /*  private flashMessagesService: FlashMessagesService, */
    public authService: AuthService ) {
   /*    this.authService.user.subscribe(user => 
        {this.loggedInUser = user}
    ) */
     }
/*   private validateSelection(formGroup: FormGroup) {
    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];
        if (control.value) {
          return null;
        }
      }
    }
    return {
      validateSelection: {
        valid: false
      }
    };

  } */
  enableModal() {
    this.modal = true;
  }
  disableModal() {
    this.modal = false;
  }
  ngOnInit() {

    this.service = this.route.snapshot.params['serviceId'];
    this.setPageData(this.service);
    this.setCommentData(this.service);
    this.updateCommentForm = this.fb.group({
   'useremail':[''],
   'userDisplayName':[''],
   'userPhoto':[''],
   'userComment':[''],
   'serviceId':[''],

});

  }
  onSubmit(form: any){
    form.commentId = this.createId();
    const collectionRef = this.afs.collection("userReviews");
    collectionRef.add(form).then(() => {
      alert('Thanks for your comment!!');
      this.disableModal();

     // this.router.navigate(['/service-detail',this.serviceId]);

    }).catch(err => {
      alert('Some error occured, please try again.')
    })
    console.log(form);
  }
  createId() {
    return this.afs.createId();
  }
  setPageData(serviceId: any) {
    this.serviceCollection = this.afs.collection('serviceInfo', ref => ref.where('serviceId', '==', serviceId));
    //this.updateCommentForm.timestamp = new Date().getTime();
    this.serviceObservable = this.serviceCollection.valueChanges();

    this.serviceObservable.subscribe(serviceData => {
      console.log('serviceData', serviceData);
      this.pageData = serviceData[0];
      console.log('servicePageData', this.pageData);
      this.populateForm(this.pageData);

    });

  }
  populateForm(pageData: any){
    this.serviceId.setValue(pageData.serviceId);
  }
  setCommentData(serviceId: any){
    this.commentCollection = this.afs.collection('userReviews', ref => ref.where('serviceId', '==', serviceId));
    this.commentObservable = this.commentCollection.valueChanges();
    this.commentObservable.subscribe(userCommentData =>{
      
      this.commentData = userCommentData;
      console.log('commentData',this.commentData);
    })

  }
  get serviceId(){ return this.updateCommentForm.get('serviceId');}
  get userComment() { return this.updateCommentForm.get('userComment');}
  get userPhoto() { return this.updateCommentForm.get('userPhoto');}
  get userDisplayName() { return this.updateCommentForm.get('userDisplayName');}
  get useremail() { return this.updateCommentForm.get('useremail');}
}
