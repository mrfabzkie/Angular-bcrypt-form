import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css'],
})
export class LoginTemplateComponent implements OnInit {
  loginForm = FormGroup;
  dispassword:any;



  getValue(val: any[],){

    this.dispassword = val;
    const salt = bcrypt.genSaltSync(10);
    this.dispassword = bcrypt.hashSync('password', 10);
  }
 
  ngOnInit(): void {
  }

  
  onSubmit(v: NgForm){
    console.log(v.value, v.valid);
  }

  constructor(private formBuilder : FormBuilder) {}

}
