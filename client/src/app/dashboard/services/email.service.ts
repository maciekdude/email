import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConversationService } from './conversation.service';
import { NluService } from './nlu.service';

import { Email } from './email';

@Injectable()
export class EmailService {

  firstEmail: Array<Email> = []

  emails: Array<Email> = [

    {
      id:"1234",
      from: "regisco@mail.com",
      to: "process@insurance.com",
      subject: "Add New Driver To Policy",
      text: "Add Irvine Brahams to fleet policy #: UL32953 , car policy: 050-632-200, zip: 32940, VIN: JHMZE2H73AS009608, License: 4382913, P#:(321) 321-2145 Thanks!!",
      requestType: null,
      status:"Incomplete",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      },
      response: null
    },
    {
      id:"1234",
      from: "gjisl@mail.com",
      to: "process@insurance.com",
      subject: "Add to fleet policy #: UL60273",
      text: "Hey, can you please add Abbott Rout to fleet policy #: UL60273 , car policy: 050-632-200, zip: 60273 Appreciate it",
      requestType: null,
      status:"Incomplete",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      },
      response: null
    },
    {
      id:"1234",
      from: "hello@mail.com",
      to: "process@insurance.com",
      subject: "Remove driver",
      text: "Please delete Nina Prahl from fleet policy #: UL52145 , VIN: JH4KA7550NC033894, License: 9410030, P#:(468) 376-9558 Thanks!",
      requestType: null,
      status:"Incomplete",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      },
      response: null
    },
    {
      id:"1234",
      from: "henry@mail.com",
      to: "process@insurance.com",
      subject: "Move drive Zelda Laimable",
      text: "Please move Zelda Laimable to fleet policy #: UL41947 , car policy: 050-672-200, zip: 41947, VIN: 1N6AA06B74N530577, License: 6078258, P#:(464) 256-9757 Thanks!!",
      requestType: null,
      status:"Incomplete",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      },
      response: null
    },
    {
      id:"1234",
      from: "admin@mail.com",
      to: "process@insurance.com",
      subject: "Delete driver- Marlo Dodshun",
      text: "Please delete Marlo Dodshun from fleet policy #: UL87534 , car policy: 053-932-600, zip: 80151, VIN: KM8SC73E94U774838, License: 2950048, P#:(732) 351-7698 Thanks",
      requestType: null,
      status:"Incomplete",
      entities: {
        Zip_Code: null,
        Cell_Number: null,
        LIC: null,
        PL_Policy: null,
        CL_Policy: null,
        First_Name: null,
        Last_Name: null,
        Vin_Number: null
      },
      response: null
    }
  ]

  emailChange: Subject<any> = new Subject<any>();
  emailsReady: Subject<any> = new Subject<any>();
  emailsUpdate: Subject<any> = new Subject<any>();

  constructor(
    public conversationService:ConversationService,
    public nluService:NluService,
    private http: Http
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
    this.firstEmail.push(this.emails[0])
    // this.emailsReady.next(this.emails)
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
    this.emailsReady.next(this.emails)
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

  refreshEmails(){
    console.log('refreshing emails from the email service');
    this.emailsUpdate.next(this.emails)
  }

}
