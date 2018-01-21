import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-farmer-page',
  templateUrl: './farmer-page.component.html',
  styleUrls: ['./farmer-page.component.css']
})
export class FarmerPageComponent implements OnInit {

  corntype = "corn";
  comment = "";
  quantity = 0;
  recipient = "";
  show="";
  show_it=false;


  body = {"sender": "ABC",
  "recipient": "D",
  "amount": 5300,
  "cost": 1.32,
  "flags": "Distribution",
  "merchandise": "Toy"
  };
  constructor(private _http: Http, private _httpClient: HttpClient) { 
    
  }

  post_produce($event){
    
    this._http.post(`http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/transactions/new`,
    {"sender": "Dummy",
      "recipient": this.recipient,
      "amount": this.quantity,
      "cost": 1,
      "flags": "None",
      "merchandise": this.comment}  
  )
    .subscribe(
      (data:any)=>{
        console.log(data._body.message);
        this.show_it=true;
        this.show=data._body;
        if(data.length){
          console.log('from post');
          console.log(data);
          
        }
      }

    );

    
  }
  
  ngOnInit() {
    
  //   this._http.get('http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/chain').map((response:any) => {
  //     console.log(response.json());
  //     response.json();
  // }).subscribe();


}
}