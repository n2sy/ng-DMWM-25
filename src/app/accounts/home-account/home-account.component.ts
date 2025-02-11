import { Component } from '@angular/core';
import { AddAccountComponent } from "../add-account/add-account.component";
import { ItemAccountComponent } from "../item-account/item-account.component";

@Component({
  selector: 'app-home-account',
  imports: [AddAccountComponent, ItemAccountComponent],
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css'
})
export class HomeAccountComponent {
    tabAccounts = [
        {
            name : "Nadim Account",
            status : 'active'
        },
        {
            name : "Abdurrahim Account",
            status : 'inactive'
        }
    ];
    addNewAccount(newAcc) {
        this.tabAccounts.push(newAcc);
    }
}
