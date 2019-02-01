import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent implements OnInit {
  menuVisible: boolean = false;
  
    showMenu(){
      if(this.menuVisible === false){
        return this.menuVisible = true;
  
  
      }
      
      this.menuVisible = false;
    }
  constructor() { }

  ngOnInit() {
  }

}
