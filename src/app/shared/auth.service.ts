import { EventEmitter, Injectable, Output } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLogged: EventEmitter<any> = new EventEmitter();

  constructor(private fireauth : AngularFireAuth,private router : Router) { }
//login component auth
  login(email: string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{ 
      localStorage.setItem('Token','true');
      this.getLogged.emit(localStorage.getItem('Token'));
      this.router.navigate(['/home']);
    },
    err =>{
      alert(err.message);
      console.warn('err')
      this.router.navigate(['/login']);

    })
  }
  //register component auth 
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registered successs')
      this.router.navigate(['/login'])
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
}
