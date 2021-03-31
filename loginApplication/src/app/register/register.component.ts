import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

//import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm :any;
  submitted = false;
  loading= false; 

  constructor(private formBuilder: FormBuilder, private router: Router, private services: ServicesService) {}

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['', [Validators.required]],
      lastname:[''],
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.nullValidator]],
      password:['',[Validators.required, Validators.minLength(3)]],
      confirmpassword:['',[Validators.required]]
    }//,{
      //validator: MustMatch('password', 'confirmPassword')}
      )
  }

  get f() { return this.registerForm.controls; }

  onSubmit(value:{ username: string; email: string; }){
    debugger
    //console.warn(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
    this.loading=true;
    this.services.onSubmit(value);
    this.submitted = true;
    this.router.navigate(['/login']);
  }}
  



