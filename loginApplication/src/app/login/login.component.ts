import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';// import services

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm :any;
  submitted = false;
  loading= false;
  signupDetails: any;
  
  
  constructor(private formBuilder: FormBuilder, private router: Router, private services: ServicesService){
    debugger
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
      email:['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit(value:{ username: string; email: string; }){
    debugger
    if(this.loginForm.invalid){
    return;}

   this.loading=true;
   this.services.onSubmit(value);//services
   this.submitted=true;
   let result = this.signupDetails.find((el: { username: any; }) => el.username === this.f.username);
   if (Object.keys(result).length > 0) {
    this.router.navigate(['/home']);
 }
  else {
  this.router.navigate(['/register']);
  }
}}

 /* if(this.signupDetails.find((Array: { username: any; }) => Array.username == this.loginForm.values)){
   this.router.navigate(['/home']);
    }
   else{
     this.router.navigate(['/register']); 
   }*/


  /*onLoadHome(){
    this.router.navigate(['/home'])
   }*/

