import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    link = "http://localhost:3000/auth";
    private http = inject(HttpClient)
    
    seConnecter(identifiants) {
        return this.http.post(`${this.link}/login`, identifiants)
    }
    inscription(identifiants) {
        return this.http.post(`${this.link}/register`, identifiants)
        
    }
    seDeconnecter() {
        localStorage.removeItem("access_token")
    }
    estConnecte() {
        let token = localStorage.getItem("access_token");
        if(token) 
            return true;
        return false
    }

  constructor() { }
}
