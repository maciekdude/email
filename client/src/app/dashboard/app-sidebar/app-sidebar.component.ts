import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

import { EmailService } from '../services/email.service';

import { Email } from '../services/email.class'

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  loading = false

  @Output() onToggled = new EventEmitter();
  public isToggled: boolean = false;

  constructor(
    private authService: LoopbackLoginService,
    private emailService: EmailService
  ) { }

  emails: Array<Email> = this.emailService.currentEmails

  ngOnInit() {
    // update emails if they change
    this.emailService.emailsUpdate.subscribe( (allEmails) =>{
      this.emails = []
      this.loading = true
      let here = this
      setTimeout(function(){
        here.emails = allEmails
        here.loading = false
      }, 1000)
    })
  }

  refreshEmails(){
    this.emailService.refreshEmails()
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
