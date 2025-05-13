import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
    private candSer = inject(GestionCandidatsService);
    private router = inject(Router);
    isSubmitted = false;
    showError = false;
  submitHandler(formValue, e) {
    this.isSubmitted = true;
    console.log(e.target[4].files[0]);
    let formData = new FormData();
    formData.append("avatar", e.target[4].files[0])
    this.candSer.uploadAvatar(formData).subscribe(
        {
            next : (response) => {
                formValue.avatar = response["fileName"];    
                this.candSer.addCandidatAPI(formValue).subscribe(
                    {
                        next : (response) => {
                            console.log(response);
                            alert(response["message"]);
                            this.router.navigateByUrl("/cv")
                        },
                        error : (err) => {
                            alert("Probléme avec l'ajout d'un candidat")
                        }
                    }
                )            
                
            },
            error : (err) => {
                this.showError = true;
            }
        }
    )
    
    //this.router.navigateByUrl("/cv")
  }
}
