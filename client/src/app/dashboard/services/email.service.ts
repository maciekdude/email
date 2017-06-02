import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ConversationService } from './conversation.service';
import { NluService } from './nlu.service';

import { Email } from './email'

@Injectable()
export class EmailService {

  emails: Array<Email> = [
    {
      id:"1234",
      from: "jackson@mail.com",
      to: "process@insurance.com",
      subject: "a nice little subject",
      text: "Aged aftertaste extra kopi-luwak single origin caramelization aftertaste trifecta arabica trifecta. At roast, shop as qui caffeine single shot. Robust mug cup ristretto viennese coffee chicory.",
      requestType: "Add to Policy",
      status:"Active",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      }
    },
    {
      id:"1245",
      from: "donald@mail.com",
      to: "process@insurance.com",
      subject: "please do this",
      text: "Add Dave Bernadot to fleet policy #: UL04806 , car policy: 050-632-200, zip: 04806, VIN: 1GCEC14W6TZ225573, License: 3993369, P#:(364) 324-4902 Thanks!!",
      requestType: "Remove from Policy",
      status:"Active",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      }
    },
    {
      id:"1256",
      from: "benito@mail.com",
      to: "process@insurance.com",
      subject: "can you add this person?",
      text: "Please move Zelda Laimable to fleet policy #: UL41947 , car policy: 050-672-200, zip: 41947, VIN: 1N6AA06B74N530577, License: 6078258, P#:(464) 256-9757 Thanks!!",
      requestType: "Add to Policy",
      status:"Active",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      }
    }
  ]

  emailChange: Subject<any> = new Subject<any>();
  emailsUpdate: Subject<any> = new Subject<any>();

  constructor(
    public conversationService:ConversationService,
    public nluService:NluService,
  ) {
    for(let i of this.emails){
      let message = i.text
      this.conversationService.sendMessage(message).subscribe(response => {
        if(response[0].intents[0]){
          i.requestType = response[0].intents[0].intent
        }
      })
      this.nluService.analyzeText(message).subscribe(response => {
        for(let n of response[0].entities){
          if(i.entities.hasOwnProperty(n.type)){
            i.entities[n.type] = n.text
          }
          this.doEntityCheck()
        }
      })
    }
    console.log(this.emails)
  }

  doEntityCheck(){
    console.log()
    for(let i of this.emails){
      let totalEntities = 0
      let completeEntities = 0
      for(let e in i.entities){
        totalEntities++
        if(i.entities[e] !== null){
          completeEntities++
        }
      }
      if(completeEntities == totalEntities){
        i.status = "Complete"
      }
    }
  }

  automate(){

  }

  getEmails(){
    return this.emails
  }

  switchEmail(email){
    this.emailChange.next(email)
  }

  submitEmail(email){
    // find the index of the given email
    let index = this.emails.indexOf(email)
    // change the status of that email
    this.emails[index].status = "Complete"
  }

  updateEntities(email, entities){
    // find the index of the given email
    let index = this.emails.indexOf(email)
    // update the entities
    this.emails[index].entities = entities
    this.switchEmail(email)
  }

}
