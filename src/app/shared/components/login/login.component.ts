import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../services/adminService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor( private formBuilder : FormBuilder, private adminservice : AdminService){
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password:  ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      const resp = this.adminservice.login(this.loginForm.value).subscribe()
    }
  }

}
