import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private emailService: EmailService,
    private router: Router
  ) { }

  emails: Array<Email> = this.emailService.emails

  requestTypes = []
  statuses = []
  entities = []
  averageEntitiesExtracted: number
  entityExtractionSuccess: number

  mostEntitiesExtracted: string
  mostEntitiesExtractedPercentage: number
  leastEntitiesExtracted: string
  leastEntitiesExtractedPercentage: number

  ngOnInit() {
    console.log('ngOnInit')
    // add emails after enrichments
    this.emailService.emailsReady.subscribe( (allEmails) =>{
      this.emails = allEmails
      this.runAnalysis()
    })
  }

  routeToEmails(){
    this.router.navigate(['/dashboard/emails']);
  }

  runAnalysis(){
    this.requestTypes = []
    this.statuses = []
    this.entities = []

    let totalEntities = 0
    let totalEntitiesExtracted = 0

    for(let i in this.emails){

      // requestTypes
      let requestTypeExists = false
      for(let x in this.requestTypes){
        if(this.requestTypes[x].name == this.emails[i].requestType){
          requestTypeExists = true
          this.requestTypes[x].count++
        }
      }
      if(!requestTypeExists){
        this.requestTypes.push(
          {
            name: this.emails[i].requestType,
            count: 1
          }
        )
      }

      // status
      let statusExists = false
      for(let x in this.statuses){
        if(this.statuses[x].name == this.emails[i].status){
          statusExists = true
          this.statuses[x].count++
        }
      }
      if(!statusExists){
        this.statuses.push(
          {
            name: this.emails[i].status,
            count: 1
          }
        )
      }

      // entities
      let allEntities = 0
      let allEntitiesExtracted = 0
      for(let e in this.emails[i].entities){
        allEntities++
        if(this.emails[i].entities[e]){
          allEntitiesExtracted++
          let entityExists = false
          for(let x in this.entities){
            if(this.entities[x].name == e){
              entityExists = true
              this.entities[x].count++
            }
          }
          if(!entityExists){
            this.entities.push(
              {
                name: e,
                count: 1
              }
            )
          }
        }
      }
      totalEntities += allEntities
      totalEntitiesExtracted +=  allEntitiesExtracted
    }

    // entity analysis
    this.averageEntitiesExtracted = totalEntitiesExtracted / this.emails.length
    this.entityExtractionSuccess = totalEntitiesExtracted / totalEntities

    // entities with most and least extractions
    let highestEntity = 0
    let lowestEntity = Infinity
    for(let i in this.entities){
      if(this.entities[i].count > highestEntity){
        highestEntity = this.entities[i].count
        this.mostEntitiesExtracted = this.entities[i].name
        this.mostEntitiesExtractedPercentage = this.entities[i].count / this.emails.length
      }
      if(this.entities[i].count < lowestEntity){
        lowestEntity = this.entities[i].count
        this.leastEntitiesExtracted = this.entities[i].name
        this.leastEntitiesExtractedPercentage = this.entities[i].count / this.emails.length
      }
    }

  }

}