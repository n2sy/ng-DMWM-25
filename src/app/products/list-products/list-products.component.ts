import { Component, inject } from '@angular/core';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { GestionProduitsService } from '../../services/gestion-produits.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
    public productService = inject(GestionProduitsService)
    
    ngOnInit() {
        
    }
    
}
