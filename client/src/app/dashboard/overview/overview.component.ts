import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private emailService: EmailService
  ) { }

  emails: Array<Email> = this.emailService.emails

  requestTypes = [
    {
      type:'win',
      count:2
    }
  ]

  ngOnInit() {
    console.log(this.emails)
    for(let i in this.emails){
      console.log(this.emails[i].requestType)
      for(let x in this.requestTypes){
        console.log(this.requestTypes[x])
        if(this.requestTypes[x].type !== this.emails[i].requestType){
          this.requestTypes.push(
            {
              type: this.emails[i].requestType,
              count: 1
            }
          )
        }
      }
    }
    console.log(this.requestTypes)
  }

}
