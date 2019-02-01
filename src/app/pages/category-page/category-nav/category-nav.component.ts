import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../shared/services/auth.service'

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  signout(){
    this.authService.signOut();
  }

}
