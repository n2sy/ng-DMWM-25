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
    
    getCandidatById(id) {
        return this.allCandidats.find((c) => c.id == id)
    }
    
    getAllCandidats() {
        return this.allCandidats;
    }
    
    addCandidat(newCandidat) {
        newCandidat.id = this.allCandidats[this.allCandidats.length - 1].id + 1;
       this.allCandidats.push(newCandidat);
    }
    
    updateCandidat(uCand) {
       let i = this.allCandidats.findIndex(c => c.id == uCand.id);
       this.allCandidats[i] = uCand
    }
    
    deleteCandidat(idCand) {
        let i = this.allCandidats.findIndex(c => c.id == idCand);
        this.allCandidats.splice(i, 1)
        
    }

  constructor() { }
}
