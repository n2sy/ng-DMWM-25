import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const myRoutes: Routes = [
    {path : '', component: AccueilComponent },
    {path : 'cv', component: CvComponent },
    {path : 'cv/add', component: AddComponent },
    {path : 'cv/:id', component: InfosComponent },
    {path : 'accounts', component: HomeAccountComponent },
    {path : 'products', component: HomeProductsComponent },
    {path : 'not-found', component: NotFoundComponent }, // Wild route
    {path : '**', redirectTo : 'not-found'}, // Wild route
];

