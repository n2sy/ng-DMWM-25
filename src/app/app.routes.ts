import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';

export const myRoutes: Routes = [
    {path : '', component: AccueilComponent },
    {path : 'cv', component: CvComponent },
    {path : 'accounts', component: HomeAccountComponent },
    {path : 'products', component: HomeProductsComponent }
];

