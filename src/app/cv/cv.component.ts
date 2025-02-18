import { Component } from '@angular/core';
import { ListeComponent } from "../liste/liste.component";
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
    tabCandidats : Candidat[] = [
        new Candidat('1', "bart", "simpson", 23, "ingénieur", "bart.jpeg"),
        new Candidat('2', "homer", "simpson", 52, "directeur", "homer.png"),
        new Candidat('3', "lisa", "simpson", 28, "designer", "lisa.png"),
        new Candidat('4', "nidhal", "jelassi", 78, "designer"),
    ];
    selectedCandidat : Candidat;
    
    recupererCandidatClique(cand) {
        this.selectedCandidat = cand;
        console.log(this.selectedCandidat);
    }

}
