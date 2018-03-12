import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  token: string;
  body: any;
  constructor(private router: Router , private http: Http) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    // this.body = {
    //   "Email":"test@gmail.com",
    //   "Password":"test@123",
    //   "InstanceId":"f377284d68ac33eab214a4e19e810b65fa8c07558a48baf601218159d89cd026"
    // }
    this.body = {
      "Email":email,
      "Password":password,
      "InstanceId":"f377284d68ac33eab214a4e19e810b65fa8c07558a48baf601218159d89cd026"
    }

    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post('http://apidev.cloudtimer.nl/auth/login',
      this.body,
      {headers: headers})
      .map(
        (response: Response) => {
          const r = response.json();
          this.token = r.Data['Token'];
          console.log( 'my token' + this.token);
          localStorage.setItem('id_token', this.token);
          console.log('sdgsdfg fdge' + localStorage.getItem('id_token'));
          return response.json();
        }
      ).catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getToken()
    //         .then(
    //           (token: string) => this.token = token
    //         )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
  }

  logout() {
    // firebase.auth().signOut();
    localStorage.removeItem('id_token');
    this.token = null;
  }

  getToken() {
    // firebase.auth().currentUser.getToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    this.token = localStorage.getItem('id_token');
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
