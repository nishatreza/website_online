import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-profilemiddle-another',
  templateUrl: './profilemiddle-another.component.html',
  styleUrls: ['./profilemiddle-another.component.css']
})
export class ProfilemiddleAnotherComponent implements OnInit {

  constructor(
    public authService:AuthService
  ) { }

  ngOnInit() {
  }
  // signout(){
  //   this.authService.signOut();
  // }

}
