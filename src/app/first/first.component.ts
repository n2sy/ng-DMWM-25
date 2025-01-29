import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-first',
  imports: [FormsModule, SecondComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
     prenom : string = "iheb";
     age : number = 40;
     myColor = 'pink';
     hd = false;
     
     clickHandler() {
        alert("J'ai été cliqué")
     }
     
     traitementDuParent(lettre) {
        console.log(lettre)
     }
     
     changePrenom(inpValue) {
        this.prenom = inpValue;
     }

}
