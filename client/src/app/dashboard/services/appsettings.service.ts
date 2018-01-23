import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';


@Injectable()
export class AppsettingsService {
  private access_token: string
  private url: string

  constructor(
    private http: Http,
    private auth: LoopbackLoginService
) {
  this.access_token = auth.get().token
  this.url =  '/api/AppConfigs/1/replace'
}

updateConfig(duration: number, flag: boolean): Observable<any> {
  let mail = {
    interval:duration,
    deleteFlag:flag
  }
  this.url =  '/api/AppConfigs/1/replace'
  return this.auth.makeAuthenticatedHttpPost(this.url, mail)

}
getConfig(){
  this.url = '/api/AppConfigs/1'
  return this.auth.makeAuthenticatedHttpGet(this.url, '')
}

}
