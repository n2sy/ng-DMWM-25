import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
    private candSer = inject(GestionCandidatsService);
    private router = inject(Router)
  submitHandler(formValue) {
    this.candSer.addCandidat(formValue);
    this.router.navigateByUrl("/cv")
  }
}
