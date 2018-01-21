import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  chain_data: any;


  constructor(private _http: Http, private _httpClient: HttpClient) { 
    
  }

  getChain(){
    
  }

  ngOnInit() {
    this._http.get('http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/chain').map((response:any) => {
      console.log(response.json());
      this.chain_data=response.json();
  }).subscribe();
  }

}
