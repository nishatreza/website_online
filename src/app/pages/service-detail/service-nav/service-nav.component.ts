import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service'

@Component({
  selector: 'app-service-nav',
  templateUrl: './service-nav.component.html',
  styleUrls: ['./service-nav.component.css']
})
export class ServiceNavComponent implements OnInit {

  constructor(public authService: AuthService) { }
  ngOnInit() {
    
  }

  signout() {
    this.authService.signOut();
  }
}
