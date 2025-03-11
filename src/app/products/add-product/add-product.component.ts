import { Component, inject } from '@angular/core';
import { GestionProduitsService } from '../../services/gestion-produits.service';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    public productSer = inject(GestionProduitsService);
}
