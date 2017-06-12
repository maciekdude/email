import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';
import { CurrentDemoService } from './current-demo.service';

@Injectable()
export class ConversationService {

  private access_token: string;
  private url: string;

  currentDemo = this.currentDemoService.currentDemo

  constructor(
    private http: Http,
    private auth: LoopbackLoginService,
    private currentDemoService: CurrentDemoService
  ) {
    this.access_token = auth.get().token
    this.url = '/api/Conversation' + this.currentDemo.id + '/message?access_token=' + this.access_token

    // subscribe to demo change
    this.currentDemoService.changeDemo.subscribe( (demo) =>{
      this.currentDemo = demo
      this.url = '/api/Conversation' + demo.id + '/message?access_token=' + this.access_token
    })
  }

  sendMessage(message: string): Observable<any> {
    let body: any = {
      input: {
        text: message
      }
    }
    return this.http.post(this.url, body)
      .map((res: Response) => res.json());
  }

}
