import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Container } from './container/container';

interface empInterface {
  id: number;
  name: string;
  role: string;
}



@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, FormsModule, Container ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('testAngular');//
  
  files: string[] = [
    './assets/images/IMG_1122.JPG'
  ];

  title = 'testAngular';
  displayTest:boolean = true;
  number = 20;
  displayElement : boolean = true;
  colorMode = 'lightMode';

  // For use with [ngStyle]
  applyVal = {
     color : 'darkgreen',
     'font-size' : '35px',
     'font-style' : 'italic',
  };

  onMouseOver() {
    this.applyVal.color = 'red';
  }

  onMouseOut() {
    this.applyVal.color = 'darkgreen';
  }

  nm : string = '';
  em : string = '';
  emailIsValid : boolean = false;
  formSubmitted : boolean = false;

  checkEmailValidation(em : string) : void{
    if ( em.includes('@') && (em.includes('.com') || em.includes('.org'))){
      this.emailIsValid = true;
    } else{
      this.emailIsValid = false;
    }
  }

  showMessage(){
    if(this.nm && this.emailIsValid){
      this.formSubmitted = true;
    }else{
      this.formSubmitted = false;
    }

  }

  toggleMode(){
    if(this.colorMode === 'lightMode'){
       this.colorMode = 'darkMode';
     } else {
      this.colorMode = 'lightMode';
     }
  }

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
