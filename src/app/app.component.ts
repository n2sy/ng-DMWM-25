import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from "./second/second.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FirstComponent, SecondComponent]
})
export class AppComponent {
  title = 'DMWM-A-25';
  lireLettre(msg) {
    this.title = msg
  }
}
