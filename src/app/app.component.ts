import { Component } from '@angular/core';
import { Observable, from, of, zip } from 'rxjs';
import { groupBy, mergeMap, reduce, toArray, map, flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excellence-ui';


  userList: User[] = [
    { id: '001', name: 'Robert Batshit', role: 'Pacifier' },
    { id: '002', name: 'Thor Odinson', role: 'Pacifier' },
    { id: '004', name: 'John Dillinger', role: 'Player' },
    { id: '001', name: 'Kerbert Merbert', role: 'Pacifier' },
    { id: '003', name: 'Robert Maynard', role: 'Policeman' },
    { id: '003', name: 'Strawman Hat', role: 'Pacifier' },
    { id: '001', name: 'John Hughes', role: 'Policeman' },
    { id: '004', name: 'William Bad', role: 'Policeman' },
    { id: '001', name: 'David Good', role: 'Player' },
  ]

  printableMap: Map<string, User[]>;

  getAllUsers() {
    this.printableMap = new Map();
    return from(this.userList).pipe(groupBy(user => user.role, user => user), flatMap(group => zip(of(group.key), group.pipe(toArray()))))
      .subscribe(obs => this.printableMap.set(obs[0], obs[1]));
  }

  ngOnInit() {
    this.getAllUsers();
    console.log(this.printableMap);
  }

}

export interface User {
  id: string;
  name: string;
  role: string;
}


