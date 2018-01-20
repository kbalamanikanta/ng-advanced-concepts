import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { User } from '../user-model';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  baseUrl = 'http://localhost:9000';

  // users: any;
  users: User[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  get() {
    this.http.get(this.baseUrl + '/users').subscribe(data => {
      this.users = data.json() as User[]; 
      console.log(`data: ${JSON.stringify(data)}`);
    },
      error => {
        console.log('error');
      }
    );
  }

  post() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    let user = { 'firstName': 'Swaroop', 'lastName': 'Ghosh' };

    this.http.post(this.baseUrl, { user }).subscribe(data => {
      console.log('done');
    })
  }

  put() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let user = { 'firstName': 'Balram2', 'lastName': 'Chavan2' };

    this.http.put(this.baseUrl, { user }, options).subscribe(data => {
      console.log(`put done`);
    });
  }

  delete() {
    let userId = 20;
    this.http.delete(this.baseUrl + '/' + userId.toString()).subscribe(data => {
      console.log('delete done');
    });
  }

}
