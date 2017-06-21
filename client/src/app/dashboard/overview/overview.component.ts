import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email'

declare var c3:any

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

  intents = [
    {
      requestType: 'requestType',
      date: new Date
    }
  ]

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
      console.log('running analysis')
      this.runAnalysis()
    })
  }

  ngOnChanges(){

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

      let status = this.emails[i].status

      // requestTypes
      let requestTypeExists = false
      for(let x in this.requestTypes){
        if(this.requestTypes[x].name == this.emails[i].requestType){
          requestTypeExists = true
          this.requestTypes[x].count++

          // add complete or incomplete status
          if(status == 'Complete'){
            this.requestTypes[x].complete++
          } else if (status == 'Incomplete'){
            this.requestTypes[x].incomplete++
          }

        }
      }

      // if no request type exists add an innitial entry
      if(!requestTypeExists){
        if(status == 'Complete'){
          this.requestTypes.push(
            {
              name: this.emails[i].requestType,
              count: 1,
              complete: 1,
              incomplete: 0
            }
          )
        } else if (status == 'Incomplete'){
          this.requestTypes.push(
            {
              name: this.emails[i].requestType,
              count: 1,
              complete: 0,
              incomplete: 1
            }
          )
        }
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

    this.intents = []
    for(let i in this.emails){
      let requestType = this.emails[i].requestType
      let entry = {
        requestType: requestType,
        date: this.emails[i].timestamp
      }

      this.intents.push(entry)

      // if(this.intents.hasOwnProperty(requestType)){
      //   this.intents[requestType].push(entry)
      // } else {
      //   this.intents[requestType] = [entry]
      // }
    }
    console.log(this.intents)
    this.buildIntentsChart()

    // let intentDates = []
    // for(let x in this.intents){
    //   this.intentDates.push(this.intents[i].date)
    // }



  }

  buildIntentsChart(){

    var chart = c3.generate({
        bindto: '#emailIntentsChart',
        data: {

          json: this.intents,
          // json: [
          //   {name: 'www.site1.com', upload: 200, download: 200, total: 400},
          //   {name: 'www.site2.com', upload: 100, download: 300, total: 400},
          // ],
          // keys: {
          //   value: ['upload', 'download']
          // }
          keys: {
            x: 'date',
            value: ['date', 'requestType']
          }

    //         x: 'x',
    // //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    //         columns: [
    //             ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    // //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
    //             ['data1', 30, 200, 100, 400, 150, 250],
    //             ['data2', 130, 340, 200, 500, 250, 350]
    //         ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });

  }

}
