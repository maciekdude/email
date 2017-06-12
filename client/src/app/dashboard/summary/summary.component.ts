import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

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
    this.emailService.emailChange.subscribe( (email) => {
      this.currentEmail = email
      this.currentEntities = []
      let entities = email.entities
      for(let i in entities){
        this.currentEntities.push({ name:i, value:entities[i]})
      }
    })
  }

  updateEntities(){
    let newEntities = {}
    for(let i of this.currentEntities){
      newEntities[i.name] = i.value
    }
    this.emailService.updateEntities(this.currentEmail, newEntities)
  }

}
