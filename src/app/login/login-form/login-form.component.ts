import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  showPassword=false
  loginFromGroup:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginFromGroup = fb.group({
      name : [''],
      password :['']  
    })
  }
name = new FormControl('')
onProceed(){
console.log(this.loginFromGroup.value);

}
}
