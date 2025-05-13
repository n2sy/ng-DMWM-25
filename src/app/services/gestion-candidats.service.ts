import { inject, Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionCandidatsService {
    private http = inject(HttpClient);
    link = "http://localhost:3000/cv/candidats"
    private allCandidats : Candidat[] = [
        new Candidat('1', "bart", "simpson", 23, "ingénieur", "bart.jpeg"),
        new Candidat('2', "homer", "simpson", 52, "directeur", "homer.png"),
        new Candidat('3', "lisa", "simpson", 28, "designer", "lisa.png"),
        new Candidat('4', "nidhal", "jelassi", 78, "designer"),
        
    ];
    
    getCandidatById(id) {
        return this.allCandidats.find((c) => c._id == id)
    }
    
    getCandidatByIdAPI(id) {
        return this.http.get(`${this.link}/${id}`)
    }
    
    getAllCandidats() {
        return this.allCandidats;
    }
    
    getAllCandidatsAPI() {
       return this.http.get<Candidat[]>(this.link)
    }
    
    uploadAvatar(f : FormData) {
       return this.http.post("http://localhost:3000/images/upload", f)
    }
    
    addCandidat(newCandidat) {
        newCandidat.id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
       this.allCandidats.push(newCandidat);
    }
    addCandidatAPI(newCandidat) {
       return this.http.post(`${this.link}`, newCandidat)
    }
    
    updateCandidat(uCand) {
       let i = this.allCandidats.findIndex(c => c._id == uCand.id);
       this.allCandidats[i] = uCand
    }
    
    updateCandidatAPI(uCand) {
       return this.http.put(`${this.link}/${uCand._id}`, uCand)
    }
    
    deleteCandidat(idCand) {
        let i = this.allCandidats.findIndex(c => c._id == idCand);
        this.allCandidats.splice(i, 1)
        
    }
    deleteCandidatAPI(idCand) {
        let token = localStorage.getItem("access_token");
        if(token) {
            let h = new HttpHeaders();
            h.append("Authorization", `bearer ${token}`)
            return this.http.delete(`${this.link}/${idCand}`, {headers : h})
        }
        return this.http.delete(`${this.link}/${idCand}`)
        
    }

  constructor() { }
}
