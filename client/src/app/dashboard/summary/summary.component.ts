import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email.class'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  currentEmail: Email = null
  currentEntities = null

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    // get the email that we just switched to
    this.emailService.emailChange.subscribe( (email) => {
      this.currentEmail = email
      // clear out current entities
      this.currentEntities = []
      // for each entity in the email, add it to currentEntities
      let entities = email.entities
      for(let i in entities){
        this.currentEntities.push({ name:i, value:entities[i]})
      }
    })
  }

  // if the user adds in an entity, update it in the current entities and as well as the actual email object
  updateEntities(){
    let newEntities = {}
    for(let i of this.currentEntities){
      newEntities[i.name] = i.value
    }
    this.emailService.updateEntities(this.currentEmail, newEntities)
  }

}
