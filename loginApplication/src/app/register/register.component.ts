import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm :any;
 loading = false;
 submitted= false;
 

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:[''],
      email:['', Validators.required],
      username:['', Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
    
     
  }
  onSubmit(){
    this.submitted=true;
    console.warn(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
  }
  this.loading=true;
    }
  onLoadLogin(){
    this.router.navigate(['/login']);
  }
}
