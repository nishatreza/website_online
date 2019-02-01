import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-downloads',
  templateUrl: './profile-downloads.component.html',
  styleUrls: ['./profile-downloads.component.scss']
})
export class ProfileDownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0); 
  }

}
