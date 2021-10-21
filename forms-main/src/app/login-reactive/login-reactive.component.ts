import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  form = new FormGroup({
  email: new FormControl('',{ 
    validators: [Validators.required, Validators.email]
  }),
  company:new FormControl('',{ 
  }),
  address: new FormControl('',{ 

  }),
  occupation:new FormControl('',{ 
    
  }),
  position:new FormControl('',{ 
  
  }),
})
  
  
  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    console.log(this.form.controls.email.value);
    console.log(this.form.controls.company.value);
    console.log(this.form.controls.address.value);
    console.log(this.form.controls.occupation.value);
    console.log(this.form.controls.position.value);
  }

  get email(){
    return this.form.controls['email'];
  }
  get company(){
    return this.form.controls['company'];
  }
  get address(){
    return this.form.controls['address'];
  }
  get occupation(){
    return this.form.controls['occupation'];
  }
  get position(){
    return this.form.controls['position'];
  }
}