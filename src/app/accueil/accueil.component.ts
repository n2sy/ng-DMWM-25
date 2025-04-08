import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
 private router = inject(Router);
    
    goToCv() {
        this.router.navigateByUrl("cv")
    }
    
    goToProducts() {
        this.router.navigate(["products"])
    }
}
