import { Component, OnInit } from '@angular/core';
import { CurrentDemoService } from '../services/current-demo.service'
import { MdDialog, MdDialogRef } from '@angular/material'
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private currentDemoService:CurrentDemoService,
    public dialog: MdDialog
  ) { }

  // navigate between these demos:
  demos = []

  currentDemo = this.currentDemoService.currentDemo

  ngOnInit() {
    this.demos = this.currentDemoService.demos
    this.currentDemoService.changeDemo.subscribe( (demo) =>{
      this.currentDemo = demo
    })
  }

  switchDemo(demo){
    this.currentDemoService.switchDemo(demo)
  }

  openInfoDialog(){
    let dialogRef = this.dialog.open(AboutComponent);
  }

}
