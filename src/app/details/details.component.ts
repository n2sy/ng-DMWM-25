import { Component, inject, Input } from '@angular/core';
import type { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';
import { FirstService } from '../services/first.service';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
   @Input() selCandidat : Candidat;
   private recrueSer = inject(GestionRecruesService);
   
   ngOnInit() {
    console.log(this.selCandidat);
    
   }
   
   onRecruter() {
        this.recrueSer.addRecrue(this.selCandidat);
   }
 

}
