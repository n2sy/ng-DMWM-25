import { Component, inject } from '@angular/core';
import { ListeComponent } from "../liste/liste.component";
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { CommonModule } from '@angular/common';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { RecruterComponent } from "../recruter/recruter.component";
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailsComponent, RecruterComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers : [FirstService, GestionRecruesService]
})
export class CvComponent {
    tabCandidats : Candidat[] = [];
    selectedCandidat : Candidat;
    
    recupererCandidatClique(cand) {
        this.selectedCandidat = cand;
        console.log(this.selectedCandidat);
    }
    
    //1ere methode injection de dependances
    constructor(private candService : GestionCandidatsService, private firstSer : FirstService) {
        
    }
    
    //2eme methode injection de dependances
    // private firstSer = inject(FirstService)
    
    
    
    ngOnInit() {
        this.tabCandidats = this.candService.getAllCandidats();
        this.firstSer.showInfos();
        
    }
    
    addNewCandidat() {
        this.candService.addCandidat();
    }
    
    showCandidats() {
        console.log(this.candService.getAllCandidats());
        
    }

}
