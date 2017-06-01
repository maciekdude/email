import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

@Injectable()
export class NluService {

  private access_token: string;
  private url: string;

  constructor(private http: Http, private auth: LoopbackLoginService) {
    this.access_token = auth.get().token
    this.url = '/api/nlu/analyzeText?access_token=' + this.access_token
  }

  analyzeText(text){
    let urlWithQuery = this.url + '&text=' + text
    return this.http.post(urlWithQuery, '')
      .map((res: Response) => res.json())
  }

}
