import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  @Output() onToggled = new EventEmitter();
  public isToggled: boolean = false;

  constructor(
    private authService: LoopbackLoginService
  ) { }

  emails = [
    {
      id:"1234",
      from: "jackson@mail.com",
      to: "process@insurance.com",
      subject: "a nice little subject",
      text:"  Please issue a certificate of insurance for: Lakewood Park Apartments, Attn: Liza Schumer 1001 Pine Wood Lane Durham, NC 27703 Please email the completed coi to Lakewood@realestateassoc.com, kaseylm4@gmail.com and cc: lbarraga@bbt.com.  Thank you."
    },
    {
      id:"1245",
      from: "jackson@mail.com",
      to: "process@insurance.com",
      subject: "please do this",
      text:"  Please issue a certificate of insurance for: Lakewood Park Apartments, Attn: Liza Schumer 1001 Pine Wood Lane Durham, NC 27703 Please email the completed coi to Lakewood@realestateassoc.com, kaseylm4@gmail.com and cc: lbarraga@bbt.com.  Thank you."
    },
    {
      id:"1256",
      from: "jackson@mail.com",
      to: "process@insurance.com",
      subject: "can you add this person?",
      text:"  Please issue a certificate of insurance for: Lakewood Park Apartments, Attn: Liza Schumer 1001 Pine Wood Lane Durham, NC 27703 Please email the completed coi to Lakewood@realestateassoc.com, kaseylm4@gmail.com and cc: lbarraga@bbt.com.  Thank you."
    }
  ]

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
