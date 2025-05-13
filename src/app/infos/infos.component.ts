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
        this.candSer.getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
            {
                next : (response : Candidat) => {
                    this.selectedCand = response;
                },
                error : (err) => {
                    this.router.navigateByUrl("/not-found")
                }
            }
        )
        
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
            this.candSer.deleteCandidatAPI(this.selectedCand._id).subscribe(
                {
                    next : (response) => {
                        alert(response["message"]);
                        this.router.navigateByUrl("/cv")
                    },
                    error : (err) => {
                        alert("Vous n'avez pas les droits nécessaires pour supprimer ce candidat")
                    }
                }
            )
        }
    }

}
