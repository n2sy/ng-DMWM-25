import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import type { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
   @Input() allCandidates : Candidat[] = [];
   @Output() eventToCv = new EventEmitter()
   
   emitToCv(cand) {
    this.eventToCv.emit(cand)
   }
}
