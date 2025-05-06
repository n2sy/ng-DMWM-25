import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  imports: [],
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css'
})
export class ExpObsComponent {
    // myObs$ : Observable<string>;
    myObs$ : Observable<number>;
    inscription : Subscription;
    
    ngOnInit() {
         this.myObs$ = new Observable((observer : Observer<number>) => {
            let count = 0;
            setInterval(() => {
                count++;
                observer.next(count)
            }, 1000)
         });
        
        // this.myObs$ = new Observable((observer : Observer<string>) => {
        //     setTimeout(() => {
        //         observer.next('Package One')
        //     }, 2000);
        //     setTimeout(() => {
        //         observer.next('Package Two')
        //     }, 4000)
        //     setTimeout(() => {
        //             observer.error(new Error("Erreur généré par DMWM"))
        //         }, 6000)
        //         setTimeout(() => {
        //             observer.next('Package Third')
        //         }, 7000)
        //         setTimeout(() => {
        //             observer.complete()
        //         }, 8000)
        // });
        
        this.inscription= this.myObs$.subscribe(
            {
                next : (data) => {
                    // console.log("Data capturée", data);
                    console.log(data);
                    
                },
                error : (err) => {
                    console.log("Erreur capturée", err);
                    
                },
                complete : () => {
                    console.log("Flux fermée");
                    
                }
            }
        )
    }
    
    ngOnDestroy() {
        this.inscription.unsubscribe();
    }

}
