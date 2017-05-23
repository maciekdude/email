import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../../utils/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*
  * This component support smaller devices as well.  The isCollapsed var is used when
  * the navbar is displayed on a smaller device and accesible from the hamburger button.
  */
  public isCollapsed:boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  public alert(msg, type) {
    this.alertService.setAlert(type, msg)
    this.isCollapsed = true;
  }

}
