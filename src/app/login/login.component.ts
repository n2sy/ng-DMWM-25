import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    defaultLanguage="python";
    myComment = "rien à signaler...";
    showRegister = true;
    showError = false;
    private auth = inject(AuthService);
    private router = inject(Router);
    
    submitHandler(f) {
        console.log(f);
        if(this.showRegister) {
            this.auth.inscription(f.value).subscribe(
                {
                    next : (response) => {
                        alert(response["message"]);
                        f.reset();
                        this.showRegister = false;
                    },
                    error : (err) => {
                        console.log(err);
                        
                    }
                }
            )
        } else {
            this.auth.seConnecter(f.value).subscribe(
                {
                    next : (response) => {
                        alert(response["message"]);
                        localStorage.setItem("access_token", response["token"]);
                        this.router.navigateByUrl("/cv")
                    },
                    error : (err) => {
                        this.showError = true;
                        f.reset();
                        
                    }
                }
            )
        }
        
    }
    
    toggleShowRegister() {
        this.showRegister = !this.showRegister;
    }
    reinitialiserForm(f : NgForm) {
        f.form.reset();
    }
    
    genererPwd(f : NgForm) {
        f.form.patchValue(
            {
                "login": "",
                "password": "azerty123",
            }
        )
    }

}
