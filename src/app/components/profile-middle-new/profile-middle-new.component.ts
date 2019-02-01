import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../shared/services/auth.service'

@Component({
  selector: 'app-profile-middle-new',
  templateUrl: './profile-middle-new.component.html',
  styleUrls: ['./profile-middle-new.component.css']
})
export class ProfileMiddleNewComponent implements OnInit {

  constructor(
    public authService:AuthService
    
  ) { }

  ngOnInit() {
  }
  // signout(){
  //   this.authService.signOut();
  // }

}
