import { Component, OnInit } from '@angular/core';
import { CurrentDemoService } from '../services/current-demo.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private currentDemoService:CurrentDemoService
  ) { }

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

}
