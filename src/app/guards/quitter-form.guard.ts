import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    if(component['isSubmitted'])
        return false;
    else {
        if(confirm("Vous risquez de perdre les données saisies, êtes-vous sûr de quitter ?"))
            return true;
        return false;
    }
        
};
