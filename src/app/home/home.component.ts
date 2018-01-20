import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private _http: Http) { }

  
  ngOnInit() {
    
    this._http.get('http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/chain').map((response:any) => {
      console.log(response.json());
      response.json();
  }).subscribe();

}
}
