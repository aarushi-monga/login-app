import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

}
