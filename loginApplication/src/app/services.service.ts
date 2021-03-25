import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
public signupDetails : Array<any> =[
  {username: "aarushi", email : "aarushim" },
  {username : "himanshi", email : "himanshid" }
];

 constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 } 

 //services---//
public onSubmit(data: { username: string; email: string }) {  
  this.signupDetails.push(this.signupDetails)
  console.log("UserName : " + data.username);  
  console.log("Email Id : " + data.email);   
} 
} 
 /* *ngIf="loginForm.value && registerForm.value">
    signupDetails.find(Array => Array.username==username) 
 */

