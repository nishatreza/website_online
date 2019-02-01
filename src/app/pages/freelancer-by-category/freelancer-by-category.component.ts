import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-by-category',
  templateUrl: './freelancer-by-category.component.html',
  styleUrls: ['./freelancer-by-category.component.css']
})
export class FreelancerByCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
