import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
    selectedId;
    private activatedRoute = inject(ActivatedRoute);
    
    ngOnInit() {
        //1ere manière
        // console.log(this.activatedRoute.snapshot.params);
       // this.selectedId = this.activatedRoute.snapshot.paramMap.get('id');
        
        //2eme manière
        this.activatedRoute.paramMap.subscribe(
            {
                next : (p : ParamMap) => {
                    this.selectedId = p.get('id');
                },
                // error : ,
                // complete : 
            }
        )
        
    }
    

}
