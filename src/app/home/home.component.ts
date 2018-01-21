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
      { name: 'Review Chain', color: 'accent', link: '/display' },
      { name: 'About Us', color: 'warn', link:'/link' },
      
    ];

  
  constructor() { 
    
  }

 
  

}