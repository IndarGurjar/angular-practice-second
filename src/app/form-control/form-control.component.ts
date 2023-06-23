import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {
 loginForm:FormGroup;
 constructor(private fb:FormBuilder){
  this.loginForm=this.fb.group({
    name:['indar',] ,
    password:''
 })
}

userLogin(){
  console.log(this.loginForm.value);
  
}
}
