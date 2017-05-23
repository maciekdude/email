import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stylish-sidebar',
  templateUrl: './stylish-sidebar.component.html',
  styleUrls: ['./stylish-sidebar.component.css']
})
export class StylishSidebarComponent implements OnInit {

  @Input() sidebarOpen: boolean;
  @Output() sidebarClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSidebar() {
    this.sidebarOpen = false;
    this.sidebarClose.emit();
  }
}
