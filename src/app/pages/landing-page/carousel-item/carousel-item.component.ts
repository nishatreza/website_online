import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){
    this.carouselTileItems = [
      {bigText:'Logo Design',smallText:'Built your brand',thumbnail:'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_subcategory_logo.jpg'},
      {bigText:'Wordpress',smallText:'Customize your site',thumbnail:'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_subcategory_wordpress.jpg'},
      {bigText:'Voice over',smallText:'Share your message',thumbnail:'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_subcategory_voiceover.jpg'}
     
    ];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }
  }


