import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpObsComponent } from "../exp-obs/exp-obs.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, ExpObsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
 private router = inject(Router);
 private http = inject(HttpClient);
    
    goToCv() {
        this.router.navigateByUrl("cv")
    }
    
    goToProducts() {
        this.router.navigate(["products"])
    }
}
