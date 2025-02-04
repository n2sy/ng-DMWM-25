import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
   @Input() oneCandidate : Candidat;
   @Output() sendCandToListe = new EventEmitter<Candidat>();
   
   emitEvent() {
    this.sendCandToListe.emit(this.oneCandidate)
   }
   
   
}
