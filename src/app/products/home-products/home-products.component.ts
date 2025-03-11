import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AddProductComponent } from "../add-product/add-product.component";
import { ListProductsComponent } from "../list-products/list-products.component";

@Component({
  selector: 'app-home-products',
  imports: [DashboardComponent, AddProductComponent, ListProductsComponent],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent {

}
