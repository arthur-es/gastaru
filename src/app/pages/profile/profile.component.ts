import { Component, OnInit } from '@angular/core';
import {ModalprofileComponent} from './modalprofile/modalprofile.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogAlterUser() {
    const dialogRef = this.dialog.open(ModalprofileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
