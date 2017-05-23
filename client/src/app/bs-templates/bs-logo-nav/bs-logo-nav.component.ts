/*
* This component showcase 2 things.  The first being a navbar at the top of the page and the
* second is the Alert Services where a child component can send a message back to the parent.
*/
import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../utils/alert.service';

@Component({
  selector: 'app-bs-logo-nav',
  templateUrl: './bs-logo-nav.component.html',
  styleUrls: ['./bs-logo-nav.component.css']
})
export class BsLogoNavComponent implements OnInit {

  private alertSub;
  private alert = {};

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  /*
  * Subscribe to Alerts that can be received from the child navbar component.
  * The alert is binded to a Bootstrap Alert component that will show the message.
  */
  ngAfterViewInit() {
    this.alertSub = this.alertService.getAlerted().subscribe((alert) => {
      this.alert = alert
    })
  }

  /*
  * This is required to re-use the Bootstrap Alert component, otherwise it won't show the second time.
  */
  onAlertClosed(e) {
    this.alert = {}
  }

  ngOnDestroy() {
    this.alertSub.unsubscribe();
  }
}
