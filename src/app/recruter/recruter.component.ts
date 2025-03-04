import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import type { Candidat } from '../models/candidat';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recruter',
  imports: [ItemComponent],
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css'
})
export class RecruterComponent {
    allRecrues : Candidat[] = [];
    private recSer = inject(GestionRecruesService);
    
    ngOnInit() {
       this.allRecrues = this.recSer.getAllRecrues();
    }

}
