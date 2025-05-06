import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import type { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
//   providers : [GestionCandidatsService]
})
export class ListeComponent {
   allCandidates : Candidat[] = [];
   @Output() eventToCv = new EventEmitter()
   
   emitToCv(cand) {
    this.eventToCv.emit(cand)
   }
   
   private candSer = inject(GestionCandidatsService);
   
   ngOnInit() {
    // this.allCandidates = this.candSer.getAllCandidats();
     this.candSer.getAllCandidatsAPI().subscribe(
        {
            next : (response : Candidat[]) => {
                this.allCandidates = response;
            },
            error : (err) => {
                
            }
        }
     )
   }
   
   showCandidats() {
    console.log(this.candSer.getAllCandidats());
    
}
}
