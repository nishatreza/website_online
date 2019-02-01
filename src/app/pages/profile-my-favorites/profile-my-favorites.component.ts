import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-my-favorites',
  templateUrl: './profile-my-favorites.component.html',
  styleUrls: ['./profile-my-favorites.component.scss']
})
export class ProfileMyFavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
