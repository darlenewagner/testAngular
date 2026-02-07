import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  isAuthorized : boolean = false;
  user : string = '';
  
  a = 24;
  b = 14;
  calc(){
    return this.a*this.b;
  }

  personObj = {
    name : 'Darlene',
    age : '51',
    city : 'Atlanta',
  }

  employees = [
    {id : 101, name : 'Seamus', salary : 45000},
    {id : 102, name : 'Jedediah', salary : 50000},
    {id : 102, name : 'Elia', salary : 65000}
  ];

  subjectList = [
    {
      subCode : 101,
      name : 'JavaScript',
    },
    {
      subCode : 102,
      name : 'Python',
    },
    {
      subCode : 103,
      name : 'Perl',
    },
    {
      subCode : 104,
      name : 'NextFlow',
    }
  ];
}

