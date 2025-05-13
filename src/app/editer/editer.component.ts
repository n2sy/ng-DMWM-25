import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editer',
  imports: [FormsModule, JsonPipe],
  templateUrl: './editer.component.html',
  styleUrl: './editer.component.css'
})
export class EditerComponent {
    candidateToUpdate : Candidat;
    private actRoute = inject(ActivatedRoute);
    private router = inject(Router);
    private candSer = inject(GestionCandidatsService);
    
    ngOnInit() {
        this.candSer.getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get("id")).subscribe(
            {
                next : (response : Candidat) => {
                    this.candidateToUpdate = response;
                }
            }
        )
        
    }
    
    submitHandler(formValue) {
        formValue._id = this.candidateToUpdate._id;
        this.candSer.updateCandidatAPI(formValue).subscribe(
            {
                next : (response) => {
                    alert(response["message"]);
                    this.router.navigateByUrl("/cv")
                },
                error : (err) => {
                    alert("Impossible de mettre à jour ce candidat...")
                }
            }
        )
    }

}
