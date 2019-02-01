import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../shared/services/auth.service'
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl;
  errorMessage;
  userForm:FormGroup;
  x:any;

  constructor(
     private authService:AuthService,
     private route: ActivatedRoute,
     private router:Router,
     private fb: FormBuilder
 
   ) { }
 
     ngOnInit() {
 
       this.userForm = this.fb.group({
         'userName': ['', [
             Validators.required,
             Validators.minLength(3)
             
           ]
         ],
         'email': ['', [
          Validators.required,
          Validators.email,
          Validators.minLength(5)
        ]
      ],
         'password': ['', [
             // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
             Validators.minLength(6),
             Validators.maxLength(25),
             Validators.required
           ]
         ]
       });
   
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
         
     }
 
    //  onSubmit() {
    //    this.formSubmitAttempt = true;
    //    if (this.userForm.valid) {
    //      console.log('form submitted');
    //    }
    //  }
 //   onSubmit() {
 //   if (this.userForm.valid) {
 //     console.log('form submitted');
 //   } else {
    
 //   }
 // }
     get email() {
       return this.userForm.get('email'); 
     }
     get password() {
       return this.userForm.get('password'); 
     }
  get userName(){
    return this.userForm.get('userName');
  }
    //  get firstName() {
    //   return this.userForm.get('firstName'); 
    // }

   
     googleSignin(){
       this.authService.googleLogin().then ( user =>{
         this.router.navigateByUrl(this.returnUrl);
       }).catch( error => {
         this.errorMessage = error.message;
         // this._flashMessagesService.show( error.message, {cssClass: '', timeout: 5000});
       });;
     }
   
    facebookSignin(){
       this.authService.facebookLogin().then ( user =>{
         this.router.navigateByUrl(this.returnUrl);
       }).catch( error => {
         this.errorMessage = error.message;
         // this._flashMessagesService.show( error.message, {cssClass: '', timeout: 5000});
       });;
     }
   
   
   
     emailSignUp(userForm){
       console.log(userForm);
      this.authService.emailSignUp(userForm).then( user => {

         this.router.navigateByUrl(this.returnUrl);
       }).catch( error => {
         this.errorMessage = error.message;
       
       });
     }  
 
   googleLogin(){
 
 
   }
   signIn(){
 
   }
 
 
 }
 