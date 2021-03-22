import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:[''],
      email:['', Validators.required],
      username:['', Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    }//,{
      //validator: MustMatch('password', 'confirmPassword')}
      )
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    //console.warn(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
    this.loading=true;
    this.router.navigate(['/login']);
  }
  
 /*onLoadLogin(){
    this.router.navigate(['/login']);
  }*/
}
