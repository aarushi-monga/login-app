import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm :any;
  submitted = false;
  loading= false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private services: ServicesService){
    //debugger
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
      email:['', [Validators.required,Validators.email]]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit(value:{ username: string; email: string; }){
    debugger
    if(this.loginForm.invalid){
    return;}

   this.loading=true;
   //this.services.onSubmit(value);//services
   this.submitted=true;
   let result = this.services.signupDetails.find((el:any) => el.email === value.email);
   if (result && Object.keys(result).length > 0) {
    this.router.navigate(['/home']);
 }
  else {
  this.router.navigate(['/']);
  }
}}

 
