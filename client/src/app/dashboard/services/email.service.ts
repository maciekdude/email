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

import { Email } from './email';

@Injectable()
export class EmailService {

  currentDemo = this.currentDemoService.currentDemo

  firstEmail: Array<Email> = []

  emails: Array<Email> = this.emailsStorageService.emails[this.currentDemo.id]

  emailChange: Subject<any> = new Subject<any>();
  emailsReady: Subject<any> = new Subject<any>();
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
    })
    this.runWatsonAnalysis()
  }

  runWatsonAnalysis(){
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
    this.firstEmail.push(this.emails[0])
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
        i.response = "Thanks, all done! We've automatically completed your request."
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
