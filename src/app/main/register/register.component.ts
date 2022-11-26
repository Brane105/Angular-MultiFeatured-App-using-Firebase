import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _builder:FormBuilder,private _router : Router ,private auth:AuthService) { }
  registerForm : FormGroup = this._builder.group({
    email : [(''),Validators.required], password : [(''),Validators.required]
  })
  errorMessage : string | undefined = undefined

  ngOnInit(): void {
  }
  handleRegister(){
    let email = this.registerForm.controls['email'].value;
    let password = this.registerForm.controls['password'].value;
    if(email !== "" && password !== ""){
    this.auth.register(email,password);
    this.registerForm.reset()
    }
    else{
      alert("Please fill fields")
    }
    
  }
  
}
