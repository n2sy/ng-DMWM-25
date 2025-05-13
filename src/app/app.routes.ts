import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditerComponent } from './editer/editer.component';
import { LoginComponent } from './login/login.component';
import { blockGuard } from './guards/block.guard';
import { allowGuard } from './guards/allow.guard';
import { quitterLoginGuard } from './guards/quitter-login.guard';
import { quitterFormGuard } from './guards/quitter-form.guard';

export const myRoutes: Routes = [
    
    //Version 2 avec children
    // {path : '', component : AccueilComponent },
    // {path : 'cv', component: CvComponent, children : [
    //     // {path : '', component: CvComponent},
    //     {path : 'add', component: AddComponent},
    //     {path : ':id', children : [
    //         {path : '', component: InfosComponent },
    //         {path : 'edit', component: EditerComponent },
            
    //     ] },
        
    // ]},
    // {path : 'accounts',  component : HomeAccountComponent },
    // {path : 'products', component: HomeProductsComponent },
    // {path : 'not-found', component: NotFoundComponent }, // Wild route
    // {path : '**', redirectTo : 'not-found'}, // Wild route
    
    //Version 1 avec children
    {path : '', component : AccueilComponent },
    // {path : 'cv', loadComponent : () => import("./cv/cv.component").then(c => c.CvComponent) },
    {path : 'cv', children : [
        {path : '', component: CvComponent},
        {path : 'add', component: AddComponent, canActivate : [blockGuard], canDeactivate : [quitterFormGuard]}, 
        {path : ':id', children : [
            {path : '', component: InfosComponent },
            {path : 'edit', component: EditerComponent, canActivate : [blockGuard]},
            
        ] },
        
    ]},
    {path : 'accounts',  component : HomeAccountComponent },
    {path : 'login',  component : LoginComponent, canActivate : [allowGuard], canDeactivate : [quitterLoginGuard] },
    {path : 'servers',  loadChildren : () => import('./sub/sub.module').then(m => m.SubModule) },
    // {path : 'accounts', redirectTo : '/products', pathMatch : 'full' },
    {path : 'products', component: HomeProductsComponent },
    {path : 'not-found', component: NotFoundComponent }, // Wild route
    {path : '**', redirectTo : 'not-found'}, // Wild route
];

