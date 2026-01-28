import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('testAngular');//
  title = 'testAngular';
  displayTest:boolean = true;
  number = 20;
  displayElement : boolean = true;

  show(){
    this.displayElement = !this.displayElement;
   }

   showEmployees : boolean = true;
   employees = signal<empInterface[]>([
     {id: 1, name: 'Hester Shaw', role: 'Admin'},
     {id: 2, name: 'Tom Natsworthy', role: 'HR'},
     {id: 3, name: 'Beauregard Pennyroyal', role: 'Marketing'},
     {id: 4, name: 'Anna Fang', role: 'Developer'},
     {id: 5, name: 'Wren Natsworthy', role: 'Marketing'},
   ]);

  toggleEmployees() {
    this.showEmployees = !this.showEmployees;
  }

  fullStackDev = [{
    id: 1,
    name: 'Angular'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'Node.js'
  },
  {
    id: 4,
    name: 'MongoDB'
  }
 ];

 showList: boolean = false;

 listItems = [{
    name: 'Alex',
    age: 23
 },
 {
    name: 'Jack',
    age: 25
 },
 {
    name: 'Darlene',
    age: 27
 },
 {
    name: 'Seamus',
    age: 24
 },
 {
    name: 'Bella',
    age: 29
 },
 {
    name: 'Pedro',
    age: 32
 }
]
}
