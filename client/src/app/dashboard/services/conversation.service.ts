import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

@Injectable()
export class ConversationService {

  private access_token: string;
  private url: string;

  constructor(private http: Http, private auth: LoopbackLoginService) {
    this.access_token = auth.get().token
    this.url = '/api/Conversation/message?access_token=' + this.access_token
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
