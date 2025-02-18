import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Candidat } from '../models/candidat';
import { CustomDirDirective } from '../custom-dir.directive';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-item',
  imports: [CustomDirDirective, NoAvatarPipe],
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
