import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../shared/services/auth.service'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { tap, sample } from 'rxjs/operators';

import { map } from 'rxjs/operators';
import { formDirectiveProvider } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  SERVICE_COLLECTION: string = 'serviceInfo';
  // @Input() user;
  categories: AbstractControl;
  categoryTypes: AbstractControl;
  standardDeliveryTime: AbstractControl;
  dragAreaClass: any;
  file: any;
  task: AngularFireUploadTask;
  pageData: any;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  public serviceCollection: AngularFirestoreCollection<any>;
  serviceObservable: Observable<any[]>;

  service: any;
  serviceForm: FormGroup;
 
  returnUrl;
  pageInfo: any;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    public authService: AuthService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.service = this.route.snapshot.params['serviceId'];
    this.setPageData(this.service);

    this.serviceForm = this.fb.group({
      'name': ['', [
        Validators.required,
        Validators.minLength(4),]],
      'serviceDescription': ['', [
        Validators.required,
        Validators.minLength(6),]],
      'categories': ['', [Validators.required]],
      'categoryTypes': ['', [Validators.required]],
      'image': [''],
      'serviceId': [''],
      'url': [''],
      'basicCost': ['', [Validators.required]],
      'basicDeliveryTime': [''],
      'basicDescription': [''],
      'standardCost': [''],
      'standardDeliveryTime': [''],
      'standardDescription': [''],
      'premiumCost': [''],
      'premiumDeliveryTime': [''],
      'premiumDescription': [''],
      'email': [''],
      'uid':['']


    });

    this.categories = this.serviceForm.controls['categories'];
    this.categoryTypes = this.serviceForm.controls['categoryTypes'];
    this.standardDeliveryTime = this.serviceForm.controls['standardDeliveryTime'];

  }
  setPageData(serviceId: any) {
    this.serviceCollection = this.afs.collection('serviceInfo', ref => ref.where('serviceId', '==', serviceId));
    this.serviceObservable = this.serviceCollection.valueChanges();

    this.serviceObservable.subscribe(serviceData => {
      console.log('serviceData', serviceData);
      this.pageData = serviceData[0];
      console.log('servicePageData', this.pageData);
      this.populateForm(this.pageData);

    });

  }

  onSubmit(form: any) {
    console.log('updated service', form);
    this.updateUserData(this.pageData.serviceId, form);
    alert('Successfully updated service.')
   

  }

  public updateUserData(uid, data) {
    const collectionRef = this.afs.collection('serviceInfo');
    return collectionRef.doc(uid).update(data)
  }

  populateForm(pageData: any) {
    this.name.setValue(pageData.name);
    this.serviceDescription.setValue(pageData.serviceDescription);
    this.categories.setValue(pageData.categories);
    this.categoryTypes.setValue(pageData.categoryTypes);
    this.basicCost.setValue(pageData.basicCost);
    this.basicDeliveryTime.setValue(pageData.basicDeliveryTime);
    this.basicDescription.setValue(pageData.basicDescription);
    this.standardDeliveryTime.setValue(pageData.standardDeliveryTime);
    this.standardCost.setValue(pageData.standardCost);
    this.standardDescription.setValue(pageData.standardDescription);
    this.premiumDeliveryTime.setValue(pageData.premiumDeliveryTime);
    this.premiumCost.setValue(pageData.premiumCost);
    this.premiumDescription.setValue(pageData.premiumDescription);
    this.url.setValue(pageData.url);
    this.uid.setValue(pageData.uid);
    this.email.setValue(pageData.email);
    this.serviceId.setValue(pageData.serviceId);

  }

  get name() { return this.serviceForm.get('name'); }
  get email() { return this.serviceForm.get('email'); }
  get url() { return this.serviceForm.get('url'); }
  get uid() { return this.serviceForm.get('uid'); }
  get serviceId() { return this.serviceForm.get('serviceId') };
  get image() { return this.serviceForm.get('image'); }
  get serviceDescription() { return this.serviceForm.get('serviceDescription'); }
  get basicDeliveryTime() { return this.serviceForm.get('basicDeliveryTime'); }
  get basicCost() { return this.serviceForm.get('basicCost'); }
  get basicDescription() { return this.serviceForm.get('basicDescription'); }
  get standardCost() { return this.serviceForm.get('standardCost'); }
  get standardDescription() { return this.serviceForm.get('standardDescription'); }
  get premiumDescription() { return this.serviceForm.get('premiumDescription'); }
  get premiumCost() { return this.serviceForm.get('premiumCost'); }
  get premiumDeliveryTime() { return this.serviceForm.get('premiumDeliveryTime'); }


  
  // this will select the sevice category types
 

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  // file upload method
  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges()

    // The file's download url
    this.downloadURL = this.task.downloadURL();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }


}


