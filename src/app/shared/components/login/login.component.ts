import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../services/adminService';
import { MessageService } from 'primeng/api';
// import { Toast } from 'primeng/toast';
// import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor( private formBuilder : FormBuilder, private adminservice : AdminService, private messageService : MessageService){
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/)]],
      password:  ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.adminservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          this.messageService.add({
            severity: "success", 
            summary: "Connection réussite", 
            detail: "Connection avec succèss", 
            life:3000
          })
        },
        error: (error) => {
          console.log('login Error',error)
          this.messageService.add({ 
            severity: "error", 
            summary: "Erreur de connection", 
            detail: "Email ou mot de passe incorrect", 
            life:3000
          }); 
        }
      })
  }}
}