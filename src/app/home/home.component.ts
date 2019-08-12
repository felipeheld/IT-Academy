import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orgs = new FormControl();
  
  orgsList: any[] = ['this_org', 'that_org', 'some_other', 'same_org'];

  constructor() { 
    console.log(this.orgs.valueChanges.subscribe(() => console.log(this.orgs.value)));
  }

  ngOnInit() {
    this.orgs.setValue([this.orgsList[0], this.orgsList[1]]);
  }



}
