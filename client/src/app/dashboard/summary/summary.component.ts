import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

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
