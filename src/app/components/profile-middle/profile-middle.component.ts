import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as _ from "lodash";


@Component({
  selector: 'app-profile-middle',
  templateUrl: './profile-middle.component.html',
  styleUrls: ['./profile-middle.component.scss']
})
export class ProfileMiddleComponent implements OnInit {
  loggedInUser: any;
  socialAccountForm: FormGroup;//social account form
  profilePageObservable:Observable<any[]>;
  public profilePageCollection:AngularFirestoreCollection<any>;
  pageData: any;
  profMdl: boolean = false;
  bankMdl: boolean = false;
  socialMdl:boolean =false;
  accountandPersonalDataForm: FormGroup;//user personal info form
  bankInfoForm: FormGroup;
  public userPersonalInfoCollection: AngularFirestoreCollection<any>=this.afs.collection('users');
  userPersonalInfoObservable: Observable<any[]>;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afs: AngularFirestore,
    public authService: AuthService

  ) {


  }
 
  ngOnInit() {
    window.scrollTo(0, 0);
this.setPageData();
    

this.accountandPersonalDataForm = this.fb.group({
  'userWebsite': [''],
  'fName': ['', [
    Validators.required,
    Validators.minLength(3),]],

  'lName': ['', [
    Validators.required,
    Validators.minLength(3),]],
  'userAddress': ['']


});

this.bankInfoForm = this.fb.group({
  /* 'emailBank': [''], */
  'bankName': ['', [
    Validators.required,
    Validators.minLength(3),]],
  'phone': ['', [
    Validators.required,
    Validators.minLength(5),]],
  'bankDistrict': ['', [Validators.required]],

  'divisionSelect': ['', [Validators.required]],
  'accountNo': ['', [
    Validators.required,
    Validators.minLength(5),]],
  'routingNumber': ['', [
    Validators.required,
    Validators.minLength(5),]],
  'userFname': ['', [
    Validators.required,
    Validators.minLength(3),]],
  'userLname': ['', [
    Validators.required,
    Validators.minLength(3),]],
  'branchAddress': ['', [Validators.required]],
});
  
     //social account form initialization
     this.socialAccountForm = this.fb.group({
      'googlePlusLink': [''],
      'facebookLink': [''],
      'twitterLink': [''],
      'instagramLink': [''],
      'pinterestLink': [''],
      'youtubeLink': [''],
      'dribbleLink': [''],
      'behanceLink': [''],
      'vimeoLink': [''],
    /*   'email': [''] */
    });  
    // this.fName.setValue(this.accountandPersonalDataForm.fName);
  }
  
  addSocialData() {
    this.socialMdl = true;
    this.socialAccountForm.reset();
  }
  disableSocialModal() {
    this.socialMdl = false;
  }
  addBankData() {
    this.bankMdl = true;
    this.bankInfoForm.reset();
  }
  disableBankModal() {
    this.bankMdl = false;
  }
  addProfileData() {
    this.profMdl = true;
    this.accountandPersonalDataForm.reset();

  }
 editBankData(bankData:any){
   this.bankMdl =true;
   this.bankName.setValue(bankData.bankName);
   this.bankDistrict.setValue(bankData.bankDistrict);
   this.divisionSelect.setValue(bankData.divisionSelect);
   this.accountNo.setValue(bankData.accountNo);
   this.routingNumber.setValue(bankData.routingNumber);
   this.userFname.setValue(bankData.userFname);
   this.userLname.setValue(bankData.userLname);
   this.phone.setValue(bankData.phone);
   this.branchAddress.setValue(bankData.branchAddress);
   
 }
  editProfileData(profileData:any){
    this.profMdl = true;
    this.userAddress.setValue(profileData.userAddress);
    this.userWebsite.setValue(profileData.userWebsite);
    this.fName.setValue(profileData.fName);
    this.lName.setValue(profileData.lName);
  }

  editSocialData(socialData:any){
    this.socialMdl=true;
    this.googlePlusLink.setValue(socialData.googlePlusLink);
    this.facebookLink.setValue(socialData.facebookLink);
    this.vimeoLink.setValue(socialData.vimeoLink);
    this.behanceLink.setValue(socialData.behanceLink);
    this.youtubeLink.setValue(socialData.youtubeLink);
    this.pinterestLink.setValue(socialData.pinterestLink);
    this.twitterLink.setValue(socialData.twitterLink);
    this.dribbleLink.setValue(socialData.dribbleLink);
    this.instagramLink.setValue(socialData.instagramLink);
  }
  disableProfileModal() {
    this.profMdl = false;
  }
  addProfileInfo(extraProfileInfo:any){
    console.log();
   this.userPersonalInfoCollection.doc(this.authService.loggedInUser.uid).set({extraProfileInfo},{merge:true})
   .then(()=>{
    alert('Successfully updated profile data');
    //  this.router.navigate(['/profile']);
    this.disableProfileModal();
   
   });
  }
  addSocialInfo(socialInfo:any){
    console.log();
   this.userPersonalInfoCollection.doc(this.authService.loggedInUser.uid).set({socialInfo},{merge:true})
   .then(()=>{
    alert('Successfully updated social media data');
     this.disableSocialModal();
   
   });
  }
  addBankInfo(bankInfo:any){
    console.log();
   this.userPersonalInfoCollection.doc(this.authService.loggedInUser.uid).set({bankInfo},{merge:true})
   .then(()=>{
    alert('Successfully updated banking data');
   this.disableBankModal();
   
   });
  }
  get userWebsite() { return this.accountandPersonalDataForm.get('userWebsite'); }
  get fName() { return this.accountandPersonalDataForm.get('fName'); }
  get lName() { return this.accountandPersonalDataForm.get('lName'); }
  get userAddress() { return this.accountandPersonalDataForm.get('userAddress'); }
  get bankName() { return this.bankInfoForm.get('bankName'); }
  get phone() { return this.bankInfoForm.get('phone'); }
  get bankDistrict() { return this.bankInfoForm.get('bankDistrict'); }
  get divisionSelect() { return this.bankInfoForm.get('divisionSelect'); }
  get accountNo() { return this.bankInfoForm.get('accountNo'); }
  get routingNumber() { return this.bankInfoForm.get('routingNumber'); }
  get userFname() { return this.bankInfoForm.get('userFname'); }
  get userLname() { return this.bankInfoForm.get('userLname'); }
  get branchAddress() { return this.bankInfoForm.get('branchAddress'); }
  get googlePlusLink() { return this.socialAccountForm.get('googlePlusLink'); }
  get facebookLink() { return this.socialAccountForm.get('facebookLink'); }
  get twitterLink() { return this.socialAccountForm.get('twitterLink'); }
  get instagramLink() { return this.socialAccountForm.get('instagramLink'); }
  get pinterestLink() { return this.socialAccountForm.get('pinterestLink'); }
  get youtubeLink() { return this.socialAccountForm.get('youtubeLink'); }
  get dribbleLink() { return this.socialAccountForm.get('dribbleLink'); }
  get behanceLink() { return this.socialAccountForm.get('behanceLink'); }
  get vimeoLink() { return this.socialAccountForm.get('vimeoLink'); }

 
 
  setPageData(){
    this.profilePageCollection = this.afs.collection('users');
    this.profilePageObservable = this.profilePageCollection.valueChanges();
    this.profilePageObservable.subscribe(profilePageData => {
      this.pageData = profilePageData;
      console.log('this is page data',this.pageData);
     
    })
   
  }
 
  
  
  signout() {
    this.authService.signOut();
  }

}
