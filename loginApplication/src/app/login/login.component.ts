import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm :any;
  submitted = false;
  loading= false;
 
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
    return;
  }
  this.loading=true;
  this.router.navigate(['/home']);
}}
  /*onLoadHome(){
    this.router.navigate(['/home'])
   }*/

