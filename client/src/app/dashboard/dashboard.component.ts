import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Injectable()
export class DashboardComponent implements OnInit {

  public isToggled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggled() {
    this.isToggled = (this.isToggled ? false : true);
  }

}
