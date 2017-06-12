import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentDemoService {

  // demo starts as insurance
  currentDemo = 'insurance'

  changeDemo: Subject<any> = new Subject<any>();

  constructor() { }

  switchDemo(demo){
    this.currentDemo = demo
    this.changeDemo.next(this.currentDemo)
  }

}
