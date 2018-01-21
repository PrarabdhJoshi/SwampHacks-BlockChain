import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  color: string;
  
    availableColors = [
      { name: 'Farmer', color: '',link:'/farmer' },
      { name: 'Transaction', color: 'primary', link:'/transaction' },
      { name: 'some link', color: 'accent', link: '/some link' },
      { name: 'Warn', color: 'warn', link:'/link' }
    ];

  
  constructor() { 
    
  }

 
  

}