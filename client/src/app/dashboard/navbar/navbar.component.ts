import { Component, OnInit } from '@angular/core'
import { CurrentDemoService } from '../services/current-demo.service'
import { MdDialog } from '@angular/material'
import { AboutComponent } from '../about/about.component'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private currentDemoService: CurrentDemoService,
    public dialog: MdDialog
      ) { }

  // navigate between these demos:
  demos = []
  fullImagePath: string
  currentDemo = this.currentDemoService.currentDemo

  ngOnInit() {
    this.fullImagePath = '/assets/img/luf-logo.png'
    this.demos = this.currentDemoService.demos
    this.currentDemoService.changeDemo.subscribe( (demo) => {
      this.currentDemo = demo
    })
  }

  // tslint:disable-next-line:one-line
  switchDemo(demo){
    this.currentDemoService.switchDemo(demo)
  }

  // tslint:disable-next-line:one-line
  openInfoDialog(){
    // tslint:disable-next-line:no-unused-variable
    let dialogRef = this.dialog.open(AboutComponent)
  }

}
