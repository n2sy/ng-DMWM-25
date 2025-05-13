import { CanDeactivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const quitterLoginGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
   let authSer = inject(AuthService);
      if(authSer.estConnecte())
          return true;
      
    return false;
};
