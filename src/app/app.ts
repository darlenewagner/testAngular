import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
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
   
   employeeRole: string = '';
   
   employees = signal<empInterface[]>([
     {id: 1, name: 'Hester Shaw', role: 'Admin'},
     {id: 2, name: 'Tom Natsworthy', role: 'HR'},
     {id: 3, name: 'Nimrod Pennyroyal', role: 'Marketing'},
     {id: 4, name: 'Anna Fang', role: 'Developer'},
     {id: 5, name: 'Wren Natsworthy', role: 'Marketing'},
     {id: 6, name: 'Freya Rasmussen', role: 'Marketing'},
     {id: 7, name: 'Theo Ngoni', role: 'Developer'},
     {id: 8, name: 'Piotr Masgard', role: 'Analyst'},
     {id: 9, name: 'Nicola Quercus', role: 'Developer'},
     {id: 10, name: 'Wavey Godshawk', role: 'Analyst'},
   ]);

  toggleEmployees() {
    this.showEmployees = !this.showEmployees;
  }

   age : number = 0;
   isEligible : boolean = false;  
   checkEligibility(){
     this.isEligible = this.age >= 18;
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
