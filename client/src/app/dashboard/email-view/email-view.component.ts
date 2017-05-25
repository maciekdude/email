import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

@Component({
  selector: 'app-email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.css']
})
export class EmailViewComponent implements OnInit {

  currentEmail: Email = null

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.currentEmail = email
    })
  }

}
