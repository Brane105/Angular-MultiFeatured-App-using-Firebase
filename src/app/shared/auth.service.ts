import { EventEmitter, Injectable, Output } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EmailVerifyComponent } from '../main/login/email-verify/email-verify.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLogged: EventEmitter<any> = new EventEmitter();

  constructor(private fireauth : AngularFireAuth,private router : Router,private dialog : MatDialog ) { 
  }
//login component auth
  login(email: string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{ 
      localStorage.setItem('Token','true');
      if(res.user?.emailVerified == true){
        this.getLogged.emit(localStorage.getItem('Token'));
        alert('Logged in')
        this.router.navigate(['/home']);
      }
      else{
        // this.router.navigate(['/verify-email'])
        this.openDialog(res)
      }
    },
    err =>{
      alert(err.message);
      console.warn('err')
      this.router.navigate(['/login']);

    })
  }
  //register component auth 
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('registered successs')
      this.router.navigate(['/login'])
      this.emailVerification(res.user);
    }, err=>{
      alert(err.message);
      console.warn('err');
      this.router.navigate(['/register']);
    })
  }
  //logout component auth 
  logout(){
    this.fireauth.signOut().then(()=>{
      alert('Logged Out')
      localStorage.removeItem("Token")
      this.router.navigate(['/login'])
    }, err=>{
      alert(err.message);
      console.warn('err');
      this.router.navigate(['/login']);
    })
  }
  //forgot password
  forgotpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then((res:any)=>{
      // this.router.navigate(['/verify-email'])
      this.openDialog(res)
      // alert("Link has been Sent on your registered email")
    },err =>{
      alert(err.message)
    })
  }
  //forgot password
  emailVerification(user:any){
    user.sendEmailVerification().then((res:any) =>{
  //  this.router.navigate(['/verify-email'])
  this.openDialog(res)
    },(err:any) =>{
      alert(err.message)
    })
  }
  openDialog(data:any): void {
    console.log("data",data)
    this.dialog.open(EmailVerifyComponent, {
      height:'300px',
      width: '300px',
      data
    });
  }
}
