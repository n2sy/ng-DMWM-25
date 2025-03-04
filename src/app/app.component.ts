import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from "./second/second.component";
import {CvComponent} from './cv/cv.component';
import { HomeAccountComponent } from "./accounts/home-account/home-account.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { ExpSignalsComponent } from "./exp-signals/exp-signals.component";
import { HomeProductsComponent } from "./products/home-products/home-products.component";
import { RecruterComponent } from "./recruter/recruter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CvComponent, ManageServersComponent, ExpSignalsComponent, HomeProductsComponent, RecruterComponent],
})
export class AppComponent {
  title = 'DMWM-A-25';
  lireLettre(msg) {
    this.title = msg
  }
}
