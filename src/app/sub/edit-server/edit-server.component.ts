import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
  standalone : false,
})
export class EditServerComponent {
      serverToUpdate;
        private actRoute = inject(ActivatedRoute);
        private serverService = inject(GestionServersService);
        
        ngOnInit() {
            this.serverToUpdate = this.serverService.getServerById(this.actRoute.snapshot.paramMap.get('id'))
            
        }

}
