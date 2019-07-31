import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Credentials } from '../../model/credentials';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email: string = "om@gmail.com";
  Password:string ='123456'
  credentials:Credentials;

  constructor(private flashMessagesService: FlashMessagesService,private ngxService: NgxUiLoaderService,private router: Router) { }

  ngOnInit() {


  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    /*if (value.email == "" || value.password == null) {
      this.flashMessagesService.show('Email and Password Required', { cssClass: 'alert-danger',timeout: 1000 });
    }*/
    if(!valid || value.email!=this.Email || value.password!=this.Password)
    {
      this.ngxService.start();
      setTimeout(() => {
      this.ngxService.stop();
    }, 500);

      this.flashMessagesService.show('Authentication Fail', { cssClass: 'alert-danger',timeout: 1500 });
    }
    if(valid && value.email === this.Email && value.password === this.Password)
    {
      this.ngxService.start();
      setTimeout(() => {
      this.ngxService.stop();
    }, 500);

      this.flashMessagesService.show('You have login successfully ', { cssClass: 'alert-success',timeout: 2500 });
      this.router.navigate(['dashboard']);
    }
  }

}
