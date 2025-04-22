import { RouterModule, Routes } from "@angular/router";
import { HomeServersComponent } from "./home-servers/home-servers.component";
import { InfoServerComponent } from "./info-server/info-server.component";
import { EditServerComponent } from "./edit-server/edit-server.component";


let routes : Routes = [
    { path : '', component : HomeServersComponent, children : [
        { path : ':id', component : InfoServerComponent},
        { path : ':id/update', component : EditServerComponent}
    ]}
];

export let SUB_ROUTING = RouterModule.forChild(routes);
