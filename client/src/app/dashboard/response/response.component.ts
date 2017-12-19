import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email.class';
import { SendemailService } from '../services/sendemail.service'

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
    private http: Http,
    private auth: LoopbackLoginService,
    private emailService: EmailService,
    private emailSend: SendemailService
  ) {
  }

  ngOnInit() {
    // switch emails if they change
    this.emailService.emailChange.subscribe( (email) => {
      this.itemsMissing = []
      this.currentEmail = email
      this.reply = ''
      let entities = email.entities
      for(let i in entities){
        if(entities[i] == null){
          this.itemsMissing.push(i)
        }
      }
      // if no response, build auto reply that can be sent by the user
      if(!this.currentEmail.response){
        this.buildAutoReply()
      }
    })
  }

  buildAutoReply(){
    this.reply = "Hi, \n\nThank you for sending this through; however, we are missing a few items. Could you please provide us with the following: \n\n"
    + this.itemsMissing.join('\n ') + '\n\n Thank you!'
  }

  sendReply(){
    this.currentEmail.response = this.reply

    /*this.url='/api/responds/sendEmail'
    let mail = {
      to:"maciek@dydejczyk.pl",
      text:"dupa 123456"
    }

    this.auth.makeAuthenticatedHttpPost(this.url, mail).toPromise()
    .then(result => {
     console.log(result)
    });*/
    this.emailSend.sendObj(this.reply, this.currentEmail).subscribe(result => {
      console.log(result)
      this.reply = 'Email sending status: ' + result.status
    })
    //this.reply = ''
  }

}
