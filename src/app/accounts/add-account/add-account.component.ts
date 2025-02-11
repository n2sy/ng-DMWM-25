import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  imports: [FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
    allStatus = ['', 'active', 'inactive', 'unknown']
    // nameValue = '';
    // statusValue = '';
    @Output() sendToHomeAccount = new EventEmitter();
    onAddAccount(n, st) {
        this.sendToHomeAccount.emit(
            {
                name : n,
                status : st
            }
        )
        
        // console.log(this.nameValue, this.statusValue);
        
    }
}
