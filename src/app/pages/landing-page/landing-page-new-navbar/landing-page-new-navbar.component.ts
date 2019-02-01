import { Component, OnInit, OnDestroy } from '@angular/core';
import{AuthService} from '../../../shared/services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page-new-navbar',
  templateUrl: './landing-page-new-navbar.component.html',
  styleUrls: ['./landing-page-new-navbar.component.css']
})
export class LandingPageNewNavbarComponent implements OnInit , OnDestroy {
  ngOnDestroy(): void {
   
    
  }
  public isCollapsed = true;
  loggedInUser:any;
  constructor(public authService:AuthService,private router: Router) { 
 this.authService.user.subscribe(user => {this.loggedInUser = user})
   
  }

  ngOnInit() {
   
  }

  
  signout(){
    this.authService.signOut();
   
  }
 
}
