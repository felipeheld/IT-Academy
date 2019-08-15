import { Component, ViewChild, OnDestroy, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'user-dialog-btn',
  templateUrl: 'user-dialog-btn.html',
})
export class UserDialogBtn {

    @Output('dialogUserSelectFormValue') dialogEvent = new EventEmitter();


    constructor(private dialog: MatDialog) {}

    openSelectUserDialog(): void {
      const dialogRef = this.dialog.open(UserDialogDialog, {
        width: '250px',
      });
      // send this data back to parent in DOM by means of event
      dialogRef.beforeClosed().subscribe(data => { 
          this.dialogEvent.emit(data); 
      });
    }

}

@Component({
  selector: 'user-dialog-dialog',
  templateUrl: 'user-dialog-dialog.html',
})
export class UserDialogDialog {

  userSelectControl = new FormControl();  
  observableUserList: Observable<Object[]>;  
  userList = [{'name':'A John Locke', 'position':'principal software engineer', 'pcfRole':'space auditor'},
              {'name':'B Thomas Hobbes', 'position':'manager', 'pcfRole':'org developer'},
              {'name':'C Francis Bacon', 'position':'software engineer', 'pcfRole':'space auditor'},
              {'name':'D George Berkeley', 'position':'principal software engineer', 'pcfRole':'org manager'},
              {'name':'E David Hume', 'position':'dev lead', 'pcfRole':'org auditor'}];

  constructor(private dialogRef: MatDialogRef<UserDialogDialog, string>) {
    this.observableUserList = new Observable<Object[]>(obs => { 
        obs.next(this.userList); 
      }
    );
  }

  ngAfterViewInit() {
    this.userSelectControl.valueChanges.subscribe(value => {
    })
  }

  onCancel(): void {
    this.dialogRef.close(this.userSelectControl.value);
  }

  onSubmit(): void {
  }

}