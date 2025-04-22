import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-info-server',
  standalone : false,
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css'
})
export class InfoServerComponent {
    selectedServer;
    disableEditBtn ;
    private actRoute = inject(ActivatedRoute);
    private serverService = inject(GestionServersService);
    
    ngOnInit() {
       //this.id =  this.actRoute.snapshot.paramMap.get('id');
       this.actRoute.paramMap.subscribe(
        {
            next : (p : ParamMap) => {
               this.selectedServer = this.serverService.getServerById( p.get('id')) 
            }
        }
       );
       
       this.actRoute.queryParamMap.subscribe(
        {
            next : (p : ParamMap) => {
              this.disableEditBtn =   p.get('allowEdit') == '1' ? false : true;
            }
        }
       )
    }

}
