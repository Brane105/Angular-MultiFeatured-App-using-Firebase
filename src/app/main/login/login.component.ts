import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _router : Router ,private auth:AuthService) { }
  loginForm : FormGroup = this._builder.group({
    email : [(''),Validators.required], password : [(''),Validators.required]
  })
  errorMessage : string | undefined = undefined

  ngOnInit(): void {
  }
  handleSubmit(){
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    if(email !== "" && password !== ""){
    this.auth.login(email,password);
    this.loginForm.reset()
    }
    else{
      alert("Please fill fields")
    }
    
  }
  
}