import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from "./second/second.component";
import {CvComponent} from './cv/cv.component';
import { HomeAccountComponent } from "./accounts/home-account/home-account.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FirstComponent, SecondComponent, CvComponent, HomeAccountComponent]
})
export class AppComponent {
  title = 'DMWM-A-25';
  lireLettre(msg) {
    this.title = msg
  }
}
