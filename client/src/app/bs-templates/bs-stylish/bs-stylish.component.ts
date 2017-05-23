import { Component } from '@angular/core';

@Component({
  selector: 'app-bs-stylish',
  templateUrl: './bs-stylish.component.html',
  styleUrls: ['./bs-stylish.component.css']
})
export class BsStylishComponent {

  public sidebarOpen: boolean = false;

  constructor() { }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

}
