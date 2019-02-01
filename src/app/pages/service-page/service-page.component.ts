import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  user:any;
  constructor(public auth:AuthService) { }

  ngOnInit() {
    window.scrollTo(0,0); 
  //   this.auth.user.subscribe(user => {this.user = user
  //     console.log('user data from profile page',this.user);
  //   })
  // }
  }
}
