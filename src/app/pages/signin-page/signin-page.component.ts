import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
