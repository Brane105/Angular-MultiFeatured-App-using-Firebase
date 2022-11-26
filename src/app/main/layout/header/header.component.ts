import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  value: string | undefined;

  constructor(private auth : AuthService){
    auth.getLogged.subscribe(data => this.changedata(data));
    console.log(this.value)
  }
  private changedata(data: string): void {
    this.value = data;
    console.log(this.value)
  }
  logout(){
    this.auth.logout()
    this.value = undefined;
  }
}
