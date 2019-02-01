import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-faq',
  templateUrl: './service-faq.component.html',
  styleUrls: ['./service-faq.component.css']
})
export class ServiceFaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('#accordion #static-1').attr('style', 'text-decoration:none');
  }

}
