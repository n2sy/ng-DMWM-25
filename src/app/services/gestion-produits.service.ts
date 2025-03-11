import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GestionProduitsService {
  allProducts = signal<Product[]>([]);

  constructor() {
    this.allProducts.set([
      new Product(crypto.randomUUID().slice(0,3), 'Product 1', 320, true),
      new Product(crypto.randomUUID().slice(0,3), 'Product 2', 112, false),
      new Product(crypto.randomUUID().slice(0,3), 'Product 3', 78, true),
    ]);
    
    effect(() => {
        console.log("La noouvelle liste de produits ", this.allProducts());  
    })
  }
  
  updateProduct(idProduit) {
    let i = this.allProducts().findIndex(p => p.id == idProduit);
    this.allProducts.update((previous) => {
        previous[i].isSelected = !previous[i].isSelected;
        
        return [...previous];
    })
    
    //Version de Iheb
    // this.allProducts()[i].isSelected = !this.allProducts()[i].isSelected;
    // this.allProducts.set(this.allProducts())
    
 
  }
  
  deleteProduct(idProduit) {
    this.allProducts.update((previous) => {
        return previous.filter(p => p.id != idProduit);
    })
    
    //Version de Abdurrahim
   // this.allProducts.set(this.allProducts().filter(p => p.id != idProduit));
  }
  
  addProduct(newProduct) {
    console.log(newProduct);
    
    newProduct.id = crypto.randomUUID().slice(0,3);
    this.allProducts.update((previous) => {
        previous.push(newProduct);
        return previous;
    })
  }
}
