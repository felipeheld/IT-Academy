import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


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
  }

  ngOnInit() {
    this.usersList.forEach(user => {
      this.usersDataSource.push({name: user.name, position: user.position, pcfRole: user.pcfRole});
    });
    this.dataSource.sort = this.sort;
  }

}


