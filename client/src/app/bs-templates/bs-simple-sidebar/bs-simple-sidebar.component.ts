import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-bs-simple-sidebar',
  templateUrl: 'bs-simple-sidebar.component.html',
  styleUrls: ['bs-simple-sidebar.component.css']
})
@Injectable()
export class BsSimpleSidebarComponent {

  public isToggled: boolean = false;

  constructor() { }

  onToggled() {
    this.isToggled = (this.isToggled ? false : true);
  }

}
