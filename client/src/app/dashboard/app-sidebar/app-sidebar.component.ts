import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

import { EmailService } from '../services/email.service';

import { Email } from '../services/email'

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  @Output() onToggled = new EventEmitter();
  public isToggled: boolean = false;

  constructor(
    private authService: LoopbackLoginService,
    private emailService: EmailService
  ) { }

  emails: Array<Email> = this.emailService.firstEmail

  ngOnInit() {
    // update emails if they change
    this.emailService.emailsUpdate.subscribe( (allEmails) =>{
      this.emails = allEmails
    })
  }

  toggleSidebar() {
    this.isToggled = (this.isToggled ? false : true);
    this.onToggled.emit();
  }

  logout() {
    this.authService.logout().subscribe();
  }

  // pass the selected email through as the active one
  activateEmail(email){
    this.emailService.switchEmail(email)
  }

}
