import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentDemoService {

  demos = [
    {
      id:1,
      name:'Insurance',
      companyName:'ACME Insurance'
    },
    {
      id:2,
      name:'Workstation Management',
      companyName:'GBM Workstation Management'
    }
  ]

  // demo starts as insurance
  currentDemo = this.demos[0]

  changeDemo: Subject<any> = new Subject<any>();

  constructor() { }

  switchDemo(demo){
    this.currentDemo = demo
    this.changeDemo.next(this.currentDemo)
  }

}
