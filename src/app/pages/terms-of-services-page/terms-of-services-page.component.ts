import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-services-page',
  templateUrl: './terms-of-services-page.component.html',
  styleUrls: ['./terms-of-services-page.component.css']
})
export class TermsOfServicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
