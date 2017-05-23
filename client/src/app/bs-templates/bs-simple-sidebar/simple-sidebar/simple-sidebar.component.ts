import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoopbackLoginService } from '../../../auth/loopback/lb-login.service';

@Component({
  selector: 'app-simple-sidebar',
  templateUrl: './simple-sidebar.component.html',
  styleUrls: ['./simple-sidebar.component.css']
})

export class SimpleSidebarComponent implements OnInit {

  @Output() onToggled = new EventEmitter();
  public isToggled: boolean = false;

  constructor(private authService: LoopbackLoginService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isToggled = (this.isToggled ? false : true);
    this.onToggled.emit();
  }

  logout() {
    this.authService.logout().subscribe();
  }

}
