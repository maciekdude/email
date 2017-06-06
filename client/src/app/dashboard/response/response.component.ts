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

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailChange.subscribe( (email) => {
      this.itemsMissing = []
      this.currentEmail = email
      // this.responseHTML = this.currentEmail.response
      let entities = email.entities
      for(let i in entities){
        if(entities[i] == null){
          this.itemsMissing.push(i)
        }
      }
    })
  }

  sendReply(){

    console.log(document.getElementById('responseHTML'))
    console.log(document.getElementById('responseArea'))

    this.currentEmail.response = document.getElementById('responseArea').innerHTML
    console.log(this.currentEmail.response)
    document.getElementById('responseHTML').innerHTML = this.currentEmail.response

    document.getElementById('responseArea').innerHTML = ''
  }

}
