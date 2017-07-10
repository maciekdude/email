import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email.class';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  currentEmail: Email = null
  itemsMissing = null
  reply:string = ''

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.itemsMissing = []
      this.currentEmail = email
      this.reply = ''
      // document.getElementById('responseHTML').innerHTML = this.currentEmail.response
      let entities = email.entities
      for(let i in entities){
        if(entities[i] == null){
          this.itemsMissing.push(i)
        }
      }
      if(!this.currentEmail.response){
        this.buildAutoReply()
      }
    })
  }

  buildAutoReply(){
    this.reply ="Hi, \n\nThank you for sending this through; however, we are missing a few items. Could you please provide us with the following: \n\n"
    + this.itemsMissing.join('\n ') + "\n\n Thank you!"
  }

  sendReply(){
    this.currentEmail.response = this.reply
    this.reply = ''
  }

}
