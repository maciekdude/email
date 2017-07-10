import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  currentEmail: Email = null
  itemsMissing = null
  autoReply:string

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.itemsMissing = []
      this.currentEmail = email
      this.autoReply = ''
      // document.getElementById('responseHTML').innerHTML = this.currentEmail.response
      let entities = email.entities
      for(let i in entities){
        if(entities[i] == null){
          this.itemsMissing.push(i)
        }
      }
      console.log(this.currentEmail)
      if(!this.currentEmail.response){
        this.buildAutoReply()
      }
    })
  }

  buildAutoReply(){
    this.autoReply ="Hi, \n\nThank you for sending this through; however, we are missing a few items. Could you please provide us with the following: \n\n"
    + this.itemsMissing.join('\n ') + "\n\n Thank you!"
    console.log(this.autoReply)
  }

  sendReply(){
    this.currentEmail.response = this.autoReply
    this.autoReply = ''

    // console.log(document.getElementById('responseHTML'))
    // console.log(document.getElementById('responseArea'))
    //
    // this.currentEmail.response = document.getElementById('responseArea').innerHTML
    // console.log(this.currentEmail.response)
    // // this.currentEmail.response
    // // document.getElementById('responseHTML').innerHTML = this.currentEmail.response
    //
    // document.getElementById('responseArea').innerHTML = ''
  }

}
