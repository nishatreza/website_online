import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-categorymenubar',
  templateUrl: './categorymenubar.component.html',
  styleUrls: ['./categorymenubar.component.css']
})
export class CategorymenubarComponent implements OnInit {

  constructor( private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goToMarket(market) {
    // let marketId = market ? market.catagory : null;
    this.router.navigate(['graphics']);
   
  }
}
