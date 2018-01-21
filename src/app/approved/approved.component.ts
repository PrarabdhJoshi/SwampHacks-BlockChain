import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  chain_data: any;
  token="";
  show=false;
  
  constructor(private _http: Http, private _httpClient: HttpClient) { 
    
  }
  get_receipt(){
    this._http.get('http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/transactions/approve?token='+this.token).map((response:any) => {
      console.log(response.json());
      this.chain_data=response.json();
  }).subscribe();
  this.show=true;
  }

  ngOnInit() {
    
  }
}
