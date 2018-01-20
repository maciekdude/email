import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  interval  = 50;
  refresh = false;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.interval )
    console.log(this.refresh);
  
  }

}
