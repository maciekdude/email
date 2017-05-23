import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-bs-sample',
  templateUrl: './bs-sample.component.html',
  styleUrls: ['./bs-sample.component.css']
})
export class BsSampleComponent implements OnInit {

  // For Buttons
  public checkModel:any = {left: false, middle: true, right: false};
  public radioModel: number = 1;

  // For Tabs
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  // For Pagination
  public maxSize:number = 5;
  public currentPage: number = 1;
  public totalItems: number = 60;
  public smallnumPages:number = 0;

  // For Stacked Progress
  public stacked = [
    {
      value: 35,
      type: "success"
    },
    {
      value: 20,
      type: "waring"
    },
    {
      value: 10,
      type: "danger"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Programmatically disable a tab
    this.staticTabs.tabs[2].disabled = true;
  }

  // Callback when a tab is selected
  public alertMe(): void {
    console.log('Function called when Tab is Selected...')
  }

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
