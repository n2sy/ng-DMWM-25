import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css'
})
export class ManageServersComponent {
    listServers = [
        {
            name : "Production Server",
            type: "medium",
            date_d : new Date(2020, 4, 4),
            status : 'critical'
            
        },
        {
            name : "Production Test Server",
            type: "medium",
            date_d : new Date(2020, 4, 4),
            status : 'critical'
            
        },
        {
            name : "Development Server",
            type: "large",
            date_d : new Date(2020, 4, 4),
            status : 'critical'
            
        },
        {
            name : "Nidhal Server",
            type: "medium",
            date_d : new Date(2020, 4, 4),
            status : 'critical'
            
        },
    ];
    
    affecterClasse(st) {
        return {
            'list-group-item-success' : st == "stable" ,
            'list-group-item-danger' : st == "critical" ,
            'list-group-item-warning' : st == "offline"
        }
    }
}
