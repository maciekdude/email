import { Component, OnInit } from '@angular/core';
import { AppsettingsService } from '../services/appsettings.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  interval  = 50;
  refresh = false;
  result = ''

  constructor(
    private updateSettings:AppsettingsService
  ) {
    this.updateSettings.getConfig().subscribe(results=>{
      console.log(results)
      this.interval=results.interval
      this.refresh = results.deleteFlag
    })
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.interval);
    console.log(this.refresh);
    this.updateSettings.updateConfig(this.interval, this.refresh).subscribe(result=>{
      console.log(result)
      this.result = result
    })
  
  }

}
