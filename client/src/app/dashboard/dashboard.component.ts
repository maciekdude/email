import { Component, OnInit, Injectable } from '@angular/core';

import { EmailService } from './services/email.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Injectable()
export class DashboardComponent implements OnInit {

  public isToggled: boolean = false;

  constructor(
    private emailService:EmailService
  ) { }

  ngOnInit() {
  }

  onToggled() {
    this.isToggled = (this.isToggled ? false : true);
  }

  refreshEmails(){
    this.emailService.refreshEmails()
  }

}
