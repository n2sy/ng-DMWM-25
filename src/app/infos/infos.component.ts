import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
    selectedCand : Candidat;
    private activatedRoute = inject(ActivatedRoute);
    private router = inject(Router);
    private candSer = inject(GestionCandidatsService);
    
    ngOnInit() {
        //1ere manière
        // console.log(this.activatedRoute.snapshot.params);
        this.selectedCand = this.candSer.getCandidatById(this.activatedRoute.snapshot.paramMap.get('id'));
        
        //2eme manière
        // this.activatedRoute.paramMap.subscribe(
        //     {
        //         next : (p : ParamMap) => {
        //             this.selectedId = p.get('id');
        //         },
        //         // error : ,
        //         // complete : 
        //     }
        // )
        
    }
    deleteHandler() {
        if(confirm("Etes vous sur de vouloir supprimer ce candidat ?")) {
            this.candSer.deleteCandidat(this.selectedCand.id);
            this.router.navigateByUrl("/cv")
        }
    }

}
