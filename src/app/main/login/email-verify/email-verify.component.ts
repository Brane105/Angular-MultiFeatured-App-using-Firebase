import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent {

  compvalue : any ; 
constructor(
  @Inject(MAT_DIALOG_DATA) public data: any){
    this.compvalue = data
    console.log(this.compvalue)
  }
}
