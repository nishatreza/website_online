import { Component, OnInit } from '@angular/core';
// import { NgxCarousel } from 'ngx-carousel';
import { NguCarousel } from '@ngu/carousel';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-first-step-page',
  
  templateUrl: './first-step-page.component.html',
  styleUrls: ['./first-step-page.component.css']
})

export class FirstStepPageComponent implements OnInit {

    // public carouselOne: NgxCarousel;
  constructor( private activatedRoute: ActivatedRoute, 
   ) { 
        console.log("test");
  }
  marketCategory: string;
  
    public carouselTileItems: Array<any>;
    public carouselTile: NguCarousel;
   
 
  
    ngOnInit(){
      this.carouselTileItems = [
      {smallText:"Build Your Own Design",bigText:"Logo Design",thumbnail:"../../../assets/images/Logo-Design.png",url:{market:"graphics",service:"logo-design"}},
      {smallText:"Customize Your Site",bigText:"Wordpress",thumbnail:"../../../assets/images/Wordpress.png",url:{market:"programming-tech",service:"wordpress"}},
      {smallText:"Share Your Message",bigText:"Voice Over",thumbnail:"../../../assets/images/Voiceover.png",url:{market:"music-audio",service:"voice-over"}},
      {smallText:"Engage Your Audeince",bigText:"Whiteboard",thumbnail:"../../../assets/images/WhiteBoard.png",url:{market:"video-animation",service:"whiteboard-animated"}},
      {smallText:"Reach More Customers",bigText:"Social Media",thumbnail:"../../../assets/images/Social-MEida.png",url:{market:"digital-mrketing",service:"social-media"}},
      {smallText:"Unlock Growth Online",bigText:"SEO",thumbnail:"../../../assets/images/SEO.png",url:{market:"digital-marketing",service:"seo"}},
      {smallText:"Show Your Best Shelf",bigText:"Resumes",thumbnail:"../../../assets/images/Resumes.png",url:{market:"writing-translation",service:"resumes-covers"}},
    ];
  
      this.carouselTile = {
        grid: {xs: 1, sm: 2, md: 3, lg: 5, all: 0},
        slide: 2,
        speed: 400,
        
        
        animation: 'lazy',
        point: {
          visible: true
        },
        load: 1,
        touch: true,
        easing:  'cubic-bezier(0, 0, 0.2, 1)'
       
      }

     
  
    }
  
    public carouselTileLoad() {
  
      const len = this.carouselTileItems.length
     if (len <= 7) {
        for (let i = len; i < len; i++) {
        this.carouselTileItems.push(i);
      }
      }
  
    }
  
       // carouselLoad will trigger this funnction when your load value reaches
       // it is helps to load the data by parts to increase the performance of the app
       // must use feature to all carousel


     
    
    
  
  }
    
      


