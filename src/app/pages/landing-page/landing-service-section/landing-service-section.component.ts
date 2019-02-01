import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-service-section',
  templateUrl: './landing-service-section.component.html',
  styleUrls: ['./landing-service-section.component.css']
})
export class LandingServiceSectionComponent implements OnInit {




  constructor(
    private router: Router,
   
  ) {
   
  }

  ngOnInit() {



  }

// done by shreya khisa 2018
  goToMarket(market) {
  
    if (market == 'graphics')
      this.router.navigate(['markets/graphics']);

    if (market == 'digital-marketing')
      this.router.navigate(['markets/digital-marketing']);

    if (market == 'writing-translation')
      this.router.navigate(['markets/writing-translation']);
    if (market == 'fun-lifestyle')
      this.router.navigate(['markets/fun-lifestyle']);

    if (market == 'video-animation')
      this.router.navigate(['markets/video-animation']);

    if (market == 'music-audio')
      this.router.navigate(['markets/music-audio']);
    if (market == 'programming-tech')
      this.router.navigate(['markets/programming-tech']);
    if (market == 'business')
      this.router.navigate(['markets/business']);

  }



 



}
