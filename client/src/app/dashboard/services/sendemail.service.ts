import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Email } from '../services/email.class';
import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';


@Injectable()
export class SendemailService {
  private access_token: string
  private url: string

  constructor(
    private http: Http,
    private auth: LoopbackLoginService
) {
  this.access_token = auth.get().token
  this.url =  '/api/responds/sendEmail'
}
sendMessage(message: string, currentEmail: Email): Observable<any> {
  let mail = {
    to: currentEmail.from,
    text: message
  }
  return this.auth.makeAuthenticatedHttpPost(this.url, mail)

}

sendObj(message: string, currentEmail: Email): Observable<any> {
  let mail = {
    to: currentEmail.from,
    text: message,
    subject:currentEmail.subject
  }
  this.url =  '/api/responds/sendObject'
  return this.auth.makeAuthenticatedHttpPost(this.url, mail)

}

}
