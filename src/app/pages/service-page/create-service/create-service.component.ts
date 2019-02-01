import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{FireStoreUtilService} from '../../../shared/services/fire-store-util.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
serviceForm:FormGroup;
name:AbstractControl
returnUrl;
  constructor(private afs:AngularFirestore,private fb:FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceForm = this.fb.group({
      'name': ['']
  });
this.serviceForm.controls['name'];
}

onSubmit(form:any) {
  // form.contactId = this.fsu.createId();c
  // this.fsu.addToCollection("contactUs", form);
  const collectionRef = this.afs.collection("serviceInfo");
  return collectionRef.add(form);
}
}