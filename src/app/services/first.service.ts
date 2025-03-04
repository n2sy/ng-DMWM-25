import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class FirstService {

  constructor(private secondSer : SecondService) { }
  
  showInfos() {
    console.log("Je suis le premier service");
    this.secondSer.afficherSalut();
    
  }
}
