import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/models/login/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login : FormGroup;
  public loginSP : UserLoginModel = {
    user : '',
    password : ''
  }

  constructor(
    private fb: FormBuilder,
    public router : Router
  ){
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  log(){
    console.log(this.login, 'form');
    this.loginSP = {
      user : this.login.value.usuario,
      password : this.login.value.password
    }
    console.log(this.loginSP);
  }

}
