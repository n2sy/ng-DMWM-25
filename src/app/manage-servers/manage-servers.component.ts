import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass, UpperCasePipe, DatePipe, ShortPipe, FormsModule, FilterPipe],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css'
})
export class ManageServersComponent {
    selectedStatut = '';
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
            status : 'offline'
            
        },
        {
            name : "Development Server",
            type: "large",
            date_d : new Date(2020, 4, 4),
            status : 'stable'
            
        },
        {
            name : "Nidhal Server",
            type: "medium",
            date_d : new Date(2020, 4, 4),
            status : 'critical'
            
        },
    ];
    
    addServer() {
        this.listServers.push(
            {
                name : "NEW SERVER",
                type: "medium",
                date_d : new Date(2020, 4, 4),
                status : 'stable'
                
            },
        )
    }
    
    affecterClasse(st) {
        return {
            'list-group-item-success' : st == "stable" ,
            'list-group-item-danger' : st == "critical" ,
            'list-group-item-warning' : st == "offline"
        }
    }
}
