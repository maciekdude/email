import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';
import { CurrentDemoService } from './current-demo.service';

@Injectable()
export class NluService {

  private access_token: string;
  private url: string;

  currentDemo = this.currentDemoService.currentDemo

  constructor(
    private http: Http,
    private auth: LoopbackLoginService,
    private currentDemoService: CurrentDemoService
  ) {
    this.access_token = auth.get().token
    this.url = '/api/nlu' + this.currentDemo.id + '/analyzeText?access_token=' + this.access_token

    // subscribe to demo change
    this.currentDemoService.changeDemo.subscribe( (demo) =>{
      this.currentDemo = demo
      this.url = '/api/nlu' + demo.id + '/analyzeText?access_token=' + this.access_token
    })
  }

  analyzeText(text){
    let urlReadyText = encodeURIComponent(text)
    let urlWithQuery = this.url + '&text=' + urlReadyText
    return this.http.post(urlWithQuery, '')
      .map((res: Response) => res.json())
  }

}
