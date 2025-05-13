import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const allowGuard: CanActivateFn = (route, state) => {
    console.log(route);

  let authSer = inject(AuthService);
     if(authSer.estConnecte())
         return false;
     
   return true;
};
