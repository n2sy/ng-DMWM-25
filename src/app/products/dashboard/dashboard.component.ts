import { Component, computed, inject } from '@angular/core';
import { GestionProduitsService } from '../../services/gestion-produits.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    private ProductSer = inject(GestionProduitsService);
    totalPrice = computed(() => {
        let newTab = this.ProductSer.allProducts().filter(p => p.isSelected);
        return newTab.reduce((total, product) => total + product.price, 0)
    })
    nbSelected = computed(() => {
       return this.ProductSer.allProducts().filter(p => p.isSelected).length;
    })
}
