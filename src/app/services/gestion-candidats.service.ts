import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class GestionCandidatsService {
    private allCandidats : Candidat[] = [
        new Candidat('1', "bart", "simpson", 23, "ingénieur", "bart.jpeg"),
        new Candidat('2', "homer", "simpson", 52, "directeur", "homer.png"),
        new Candidat('3', "lisa", "simpson", 28, "designer", "lisa.png"),
        new Candidat('4', "nidhal", "jelassi", 78, "designer"),
        
    ];
    
    getAllCandidats() {
        return this.allCandidats;
    }
    
    addCandidat() {
        this.allCandidats.push(
            new Candidat('3', "NEW", "CANDIDAT", 28, "designer", "lisa.png"),
            
        )
    }

  constructor() { }
}
