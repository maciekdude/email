import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  currentEmail: Email = null
  itemsMissing: Array<any> = []

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.itemsMissing = []
      this.currentEmail = email
      // if(this.currentEmail.entities.vin === null || this.currentEmail.entities.vin === ""){
      //   this.itemsMissing.push("VIN")
      // }
      // if(this.currentEmail.entities.license === null || this.currentEmail.entities.license === ""){
      //   this.itemsMissing.push("License")
      // }
    })
  }

}
