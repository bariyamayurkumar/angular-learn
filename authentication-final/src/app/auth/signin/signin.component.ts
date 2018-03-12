import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Response } from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  displayMsg = false;

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password)
      .subscribe(
        (response) => {
          console.log(response.Data['Token']);
          console.log(response);
          this.displayMsg = false;
          this.router.navigate(['/competitionlist']);
        },
        (error) => { console.log(error);
          this.displayMsg = true;
        }
      );

  }

}
