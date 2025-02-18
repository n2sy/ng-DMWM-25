import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signals',
  imports: [],
  templateUrl: './exp-signals.component.html',
  styleUrl: './exp-signals.component.css'
})
export class ExpSignalsComponent {
    productName = signal("ordinateur");
    counter = signal(0);
    section = computed(() => {
        return "DMWM == " + this.counter() * 100
    })
    
    constructor() {
        effect(() => {
            console.log("valeur du signal " + this.counter() + "modifié")
            console.log("valeur du signal " + this.productName() + "modifié")
        })
    }
    
    changeName() {
        this.productName.set("---------");
    }
    
    increment() {
         this.counter.set(this.counter() + 1)
        //this.counter.update((previousValue) => previousValue + 1 )
    }
}
