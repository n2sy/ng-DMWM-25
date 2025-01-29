import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
 @Input({required : true}) cl = "yellow";
 @Output() eventToParent = new EventEmitter(); // enveloppe
 
 sendEvent() { // On va déposer l'enveloppe à la poste
    this.eventToParent.emit("Lettre de la part de vote enfant");
 }
}
