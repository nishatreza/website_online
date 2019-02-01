import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projectspage',
  templateUrl: './my-projectspage.component.html',
  styleUrls: ['./my-projectspage.component.css']
})
export class MyProjectspageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
