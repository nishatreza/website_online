import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-builder',
  templateUrl: './website-builder.component.html',
  styleUrls: ['./website-builder.component.css']
})
export class WebsiteBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
