import { Injectable } from '@angular/core';
import { Email } from './email.class';

// import { EmailService } from './email.service';
import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

@Injectable()
export class EmailsStorageService {

  url = '/api/emails'

  // store of all the emails for each scenario
  // emails is an array of arrays for each scenario: [[insurance emails], [IT asset emails]]
  // emails: Array<Email>

  constructor(
    private auth: LoopbackLoginService,
    // private emailService: EmailService
  ) {
    this.getEmails().subscribe(data=>{
      console.log(data)
      // this.emails = data
    })
    // // after enrichment, check if there are changes to the emails
    // this.emailService.emailsReady.subscribe( (allEmails) =>{
    //
    // })
  }

  getEmails(){
    return this.auth.makeAuthenticatedHttpGet(this.url, '')
  }

}
