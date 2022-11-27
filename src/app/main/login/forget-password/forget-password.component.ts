import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _builder:FormBuilder,private _router : Router ,private auth:AuthService) { }
  forgotForm : FormGroup = this._builder.group({
    email : [(''),Validators.required]
  })
  errorMessage : string | undefined = undefined

  ngOnInit(): void {
  }
  handleforgot(){
    let email = this.forgotForm.controls['email'].value;
    if(email !== ""){
    this.auth.forgotpassword(email);
    this.forgotForm.reset()
    }
    else{
      alert("Please fill fields")
    }
    
  }
}
