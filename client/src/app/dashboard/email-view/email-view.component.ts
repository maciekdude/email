import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email.class'

@Component({
  selector: 'app-email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.css']
})
export class EmailViewComponent implements OnInit {

  currentEmail: Email = null
  toneList: Array<any> = []

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.currentEmail = email
      if (email.document_tone){
        this.toneList = email.document_tone
      }else{
        this.toneList = []
      }
    })
    
  }

}
