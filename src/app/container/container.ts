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
