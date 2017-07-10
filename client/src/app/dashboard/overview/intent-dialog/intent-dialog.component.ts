import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-intent-dialog',
  templateUrl: './intent-dialog.component.html',
  styleUrls: ['./intent-dialog.component.css']
})
export class IntentDialogComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MdDialog,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  intentData:object

  ngOnInit() {
    this.intentData = this.data
  }

  routeToEmails(){
    this.router.navigate(['/dashboard/emails']);
    this.dialog.closeAll()
  }

}
