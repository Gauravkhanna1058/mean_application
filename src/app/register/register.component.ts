import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  heroesUrl = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  RegisterUser() {
    const req = this.http.post('http://localhost:3000/users', {
      name: this.model.name,
      email: this.model.email,
      password: this.model.password,
      firstname : this.model.firstname
    },httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    };
  }

