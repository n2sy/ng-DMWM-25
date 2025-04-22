import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionServersService {
    allServers = [
        {
            id : 1,
            name : "Abdou Server",
            status : "online"
        },
        {
            id : 2,
            name : "Farah Server",
            status : "offline"
        },
        {
            id : 3,
            name : "Emmanuel Server",
            status : "offline"
        }
    ];
    
    getServerById(id) {
       return this.allServers.find(s => s.id == id);
    }

  constructor() { }
}
