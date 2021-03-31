import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
public signupDetails : Array<any> =[];

 constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 } 

 //services---//
public onSubmit(data: { username: string; email: string }) {  
  this.signupDetails.push(data)
  console.log("UserName : " + data.username);  
  console.log("Email Id : " + data.email);   
} 
} 
 

