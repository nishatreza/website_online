import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../shared/services/auth.service'

@Component({
  selector: 'app-freelancer-by-category-nav',
  templateUrl: './freelancer-by-category-nav.component.html',
  styleUrls: ['./freelancer-by-category-nav.component.css']
})
export class FreelancerByCategoryNavComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  signout(){
    this.authService.signOut();
  }

}
