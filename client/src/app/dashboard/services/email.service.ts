import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConversationService } from './conversation.service';
import { NluService } from './nlu.service';
import { CurrentDemoService } from './current-demo.service';
import { EmailsStorageService } from './emails-storage.service';

import { Email } from './email.class';

@Injectable()
export class EmailService {

  // the current demo scenario (insurance OR IT asset mgmt)
  currentDemo = this.currentDemoService.currentDemo

  // the first emails sent through (all but 2, to showcase emails coming in in real time)
  firstEmail: Array<Email> = []
  // all emails for the given scenario
  emails: Array<Email> = this.emailsStorageService.emails[this.currentDemo.id]

  // switching between individual emails
  emailChange: Subject<any> = new Subject<any>();
  // indicating emails are ready
  emailsReady: Subject<any> = new Subject<any>();
  // sending emails through (could be firstEmail or all emails)
  emailsUpdate: Subject<any> = new Subject<any>();

  constructor(
    public conversationService:ConversationService,
    public nluService:NluService,
    public currentDemoService:CurrentDemoService,
    public emailsStorageService:EmailsStorageService,
    private http: Http
  ) {

    // subscribe to demo change
    this.currentDemoService.changeDemo.subscribe( (demo) =>{
      this.currentDemo = demo
      this.emails = this.emailsStorageService.emails[this.currentDemo.id]
      this.runWatsonAnalysis()
      this.emailsUpdate.next(this.firstEmail)
    })
    this.runWatsonAnalysis()
  }

  runWatsonAnalysis(){
    for(let i of this.emails){
      let message = i.text
      // run each email through conversation to get the intent
      this.conversationService.sendMessage(message).subscribe(response => {
        if(response[0].intents[0]){
          i.requestType = response[0].intents[0].intent
        }
      })
      // run each email through NLU to check the entities
      this.nluService.analyzeText(message).subscribe(response => {
        if(response[0]){
          for(let n of response[0].entities){
            if(i.entities.hasOwnProperty(n.type)){
              i.entities[n.type] = n.text
              this.doEntityCheck()
            }
          }
        }
      })
    }
  }

  // check which entities are complet
  doEntityCheck(){
    let emailsAnalyzed = 0
    for(let i of this.emails){
        let totalEntities = 0
        let completeEntities = 0
        for(let e in i.entities){
          totalEntities++
          if(i.entities[e] !== null){
            completeEntities++
          }
        }
        // if complete add auto response
        if(completeEntities == totalEntities){
          i.status = "Complete"
          i.response = "Thanks, all done! We've automatically completed your request."
          emailsAnalyzed++
        } else {
          emailsAnalyzed++
        }
    }
    if(this.emails.length == emailsAnalyzed){
      // add emails to firstEmail array (everything but 2 most recent emails)
      this.firstEmail = []
      let firstEmails = this.emails.slice(0)
      firstEmails.splice(0,2)
      this.firstEmail = firstEmails
      this.emailsReady.next(this.emails)
    }
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
    // pass in ALL emails
    this.emailsUpdate.next(this.emails)
  }

}
