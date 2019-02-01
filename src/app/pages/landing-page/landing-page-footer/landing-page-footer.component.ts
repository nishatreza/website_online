import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-landing-page-footer',
  templateUrl: './landing-page-footer.component.html',
  styleUrls: ['./landing-page-footer.component.css']
})
export class LandingPageFooterComponent implements OnInit {

  constructor() {
    console.log($);
   }

  ngOnInit() {
    
  }

}
