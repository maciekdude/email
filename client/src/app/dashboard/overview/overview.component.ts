import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { EmailService } from '../services/email.service';
import { Email } from '../services/email.class'

import {MdDialog} from '@angular/material';

import {IntentDialogComponent} from './intent-dialog/intent-dialog.component';

declare var c3:any

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private emailService: EmailService,
    private router: Router,
    public dialog: MdDialog
  ) { }

  emails: Array<Email> = this.emailService.emails

  // analysis by request type (intent) - includes entity breakdown
  requestTypes = []

  // elements for Email Intents / Time c3 chart
  intents = []
  intentNamesforChart = []

  ngOnInit() {
    // add emails after enrichments
    this.emailService.emailsReady.subscribe( (allEmails) =>{
      this.emails = allEmails
      this.runAnalysis()
    })
  }

  routeToEmails(){
    this.router.navigate(['/dashboard/emails']);
  }

  openDialog(type){
    this.dialog.open(IntentDialogComponent, {data: type});
  }

  runAnalysis(){
    this.requestTypes = []
    for(let i in this.emails){
      let status = this.emails[i].status
      // requestTypes (intents)
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

          // add entity counts if entity exists
          for(let n in this.emails[i].entities){
            if(this.emails[i].entities[n] !== null){
              for(let q of this.requestTypes[x].entities){
                if(q.name === n){
                  q.count++
                }
              }
            }
          }

        }
      }
      // if no request type exists add an innitial entry
      if(!requestTypeExists){

        // setting up entities count
        let entitiesEntry = []
        for(let x in this.emails[i].entities){
          let value = this.emails[i].entities[x]
          if(value == null){
            entitiesEntry.push({"name": x,"count": 0})
          } else {
            entitiesEntry.push({"name": x,"count": 1})
          }
        }
        if(status == 'Complete'){
          this.requestTypes.push(
            {
              name: this.emails[i].requestType,
              count: 1,
              complete: 1,
              incomplete: 0,
              entities: entitiesEntry
            }
          )
        } else if (status == 'Incomplete'){
          this.requestTypes.push(
            {
              name: this.emails[i].requestType,
              count: 1,
              complete: 0,
              incomplete: 1,
              entities: entitiesEntry
            }
          )
        }
      }
    }

    // prepare data for c3 chart
    this.intents = []
    let firstItteration = true
    for(let i in this.emails){

      let date = this.emails[i].timestamp
      let requestType = this.emails[i].requestType
      // adding to array of chart variables
      if(!this.intentNamesforChart.hasOwnProperty(requestType)){
        this.intentNamesforChart.push(requestType)
      }
      let foundItem = 0

      if(firstItteration){
        let entry = {
          "date": date,
          [requestType]: 1
        }
        this.intents.push(entry)
        firstItteration = false
      } else {
        for(let x in this.intents){
          if(date.getTime() == this.intents[x].date.getTime()){
            if(this.intents[x].hasOwnProperty(requestType)){
              this.intents[x][requestType] ++
            } else {
              this.intents[x][requestType] = 1
            }
            break
          } else {
            foundItem++
          }
          if(foundItem == this.intents.length){
            let entry = {
              "date": date,
              [requestType]: 1
            }
            this.intents.push(entry)
          }
        }
      }
    }
    this.buildIntentsChart()
  }

  // c3 chart of intents over time
  buildIntentsChart(){

    var chart = c3.generate({
        bindto: '#emailIntentsChart',
        data: {

          json: this.intents,
          keys: {
            x: 'date',
            value: this.intentNamesforChart
          }
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
