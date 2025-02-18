import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], selStatut : string): any[] {
    if(!selStatut.length)
        return value;
    else {
        let newTab = [];
        for (const server of value) {
            if(server["status"] == selStatut)
                newTab.push(server);
        }
        return newTab;
    }
  }

}
