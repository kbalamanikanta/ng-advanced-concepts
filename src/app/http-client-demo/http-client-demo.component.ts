import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import { User } from '../user-model';

@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent implements OnInit {

  baseUrl = 'http://localhost:9000';

  // users: any;
  users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  get() {
    this.httpClient.get<User[]>(this.baseUrl + '/users').subscribe(data => {
      this.users = data;
    });

    // this.httpClient.get(this.baseUrl).retry(5). subscribe(data => {
    //   this.users = data;
    // })
  }

  post() {
    let user = { 'firstName': 'Swaroop', 'lastName': 'Ghosh' };
    this.httpClient.post(this.baseUrl, { user }).subscribe(data => {
      console.log('post done');
    })
  }

  put(){
    let user = { 'firstName': 'Swaroop', 'lastName': 'Ghosh' };
    this.httpClient.put(this.baseUrl, { user }).subscribe(data => {
      console.log('put done');
    })
  }

  delete(){
    this.httpClient.delete(this.baseUrl +'/3').subscribe(data => {
      console.log('delete done');
    })
  }

}
