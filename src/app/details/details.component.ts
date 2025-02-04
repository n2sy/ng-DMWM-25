import { Component, Input } from '@angular/core';
import type { Candidat } from '../models/candidat';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
   @Input() selCandidat : Candidat;

}
