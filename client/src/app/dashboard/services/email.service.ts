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

  // // the first emails sent through (all but 2, to showcase emails coming in in real time)
  // firstEmail: Array<Email> = []
  // all emails
  emails: Array<Email> = []
  // all emails for the given scenario
  currentEmails: Array<Email> = []

  // switching between individual emails
  emailChange: Subject<any> = new Subject<any>();
  // sending emails through (could be firstEmail or all emails)
  emailsUpdate: Subject<any> = new Subject<any>();

  constructor(
    public conversationService:ConversationService,
    public nluService:NluService,
    public currentDemoService:CurrentDemoService,
    public emailsStorageService:EmailsStorageService,
    private http: Http
  ) {
    this.emailsStorageService.getEmails().subscribe(data=>{
      this.sortEmails(data)
    })
    this.currentDemoService.changeDemo.subscribe( (demo) =>{
      this.currentDemo = demo
      this.currentEmails = []
      for(let i of this.emails){
        if(i.set === this.currentDemo.name){
          this.currentEmails.push(i)
        }
      }
      this.emailsUpdate.next(this.currentEmails)
    })
  }

  sortEmails(allEmails){
    this.emails = allEmails
    for(let i of allEmails){
      if(i.set === this.currentDemo.name){
        this.currentEmails.push(i)
      }
    }
    this.emailsUpdate.next(this.currentEmails)
  }

  getEmails(){
    return this.currentEmails
  }

  switchEmail(email){
    console.log(email)
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
    let index = this.currentEmails.indexOf(email)
    // update the entities
    this.currentEmails[index].entities = entities
    this.switchEmail(email)
  }

  refreshEmails(){
    this.emailsStorageService.getEmails().subscribe(data => {
      // pass in ALL emails
      this.sortEmails(data)
    })
  }

}
