import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentDemoService {

  demos = [
    {
      id:0,
      name:'Insurance',
      companyName:'ACME Insurance',
      icon:'security'
    },
    {
      id:1,
      name:'IT Asset Management',
      companyName:'IT Asset Management',
      icon:'computer'
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
