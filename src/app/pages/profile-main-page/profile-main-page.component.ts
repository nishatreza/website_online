import { Component, OnInit } from '@angular/core';
import {AuthGuard as FirebaseGuard} from '../../shared/services/auth.guard';
@Component({
  selector: 'app-profile-main-page',
  templateUrl: './profile-main-page.component.html',
  styleUrls: ['./profile-main-page.component.scss']
})
export class ProfileMainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
