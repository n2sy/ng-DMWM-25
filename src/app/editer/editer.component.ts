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
       this.candidateToUpdate = this.candSer.getCandidatById(this.actRoute.snapshot.paramMap.get("id"))
        
    }
    
    submitHandler(formValue) {
        formValue.id = this.candidateToUpdate.id;
        this.candSer.updateCandidat(formValue);
        this.router.navigateByUrl("/cv")
    }

}
