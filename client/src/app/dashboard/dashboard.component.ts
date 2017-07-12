import { Component, OnInit, Injectable } from '@angular/core';

import { EmailService } from './services/email.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Injectable()
export class DashboardComponent implements OnInit {

  constructor(
    private emailService:EmailService
  ) { }

  ngOnInit() {
  }

}
