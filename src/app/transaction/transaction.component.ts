import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  corntype = "corn";
  comment = "";
  quantity = 0;


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
    
    // this._http.post(`http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/transactions/new`,
    // {"sender": "Eyal",
    // "recipient": "Allan",
    // "amount": 8,
    // "cost": 1.36,
    // "flags": "bution",
    // "merchandise": "Toys"
    // })
    // .subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     if(data.length){
    //       console.log('from post');
    //       console.log(data);
    //     }
    //   }

    // );

    console.log({"type":this.corntype,"comment":this.comment,"quantity":this.quantity});
  }
  
  ngOnInit() {
    
  //   this._http.get('http://ec2-54-243-16-82.compute-1.amazonaws.com:5000/chain').map((response:any) => {
  //     console.log(response.json());
  //     response.json();
  // }).subscribe();


}
}
