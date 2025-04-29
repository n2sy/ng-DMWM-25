import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    defaultLanguage="python";
    myComment = "rien à signaler..."
    
    submitHandler(f) {
        console.log(f);
        
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
