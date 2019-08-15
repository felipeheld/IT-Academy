import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { CdkTable } from '@angular/cdk/table';
import { of, Observable } from 'rxjs';


interface User {
  name: string;
  position: string;
  pcfRole: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orgs = new FormControl();
  
  orgsList: any[] = ['this_org', 'that_org', 'some_other', 'same_org'];

  usersList: any[] = [
    {'name':'A John Locke', 'position':'principal software engineer', 'pcfRole':'space auditor'},
    {'name':'B Thomas Hobbes', 'position':'manager', 'pcfRole':'org developer'},
    {'name':'C Francis Bacon', 'position':'software engineer', 'pcfRole':'space auditor'},
    {'name':'D George Berkeley', 'position':'principal software engineer', 'pcfRole':'org manager'},
    {'name':'E David Hume', 'position':'dev lead', 'pcfRole':'org auditor'}
  ]; 

  usersDataSource: any = [];
  
  displayedColumns: string[] = ['name', 'position', 'pcfRole'];

  dataSource = new MatTableDataSource(this.usersDataSource);

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() { 
    // this.orgs.valueChanges.subscribe(() => console.log(this.orgs.value));
  }

  addToUsersList(event: User[]) {
    // console.log(`This is an event emitted by the dialog button component, received through tha dialog view in order to push selected values to dashboard list ${event}`);
    event.forEach((user: User) => { 
      this.usersDataSource.push(user);
    });
  }

  ngOnInit() {
    this.usersList.forEach(user => {
      this.usersDataSource.push({ name: user.name, position: user.position, pcfRole: user.pcfRole });
    });
    this.dataSource.sort = this.sort;
  }

}
