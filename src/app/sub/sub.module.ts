import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InfoServerComponent, EditServerComponent, HomeServersComponent],
  imports: [
    CommonModule,SUB_ROUTING, FormsModule
  ]
})
export class SubModule { }
