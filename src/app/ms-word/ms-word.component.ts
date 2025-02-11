import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ms-word',
  imports: [FormsModule, NgStyle],
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css'
})
export class MsWordComponent {
    bgColor;
    txtColor;
    txtSize;
    txtFont;
    
    changeFontSize(newSize) {
        let unite = prompt("Veuillez saisir l'unité (cm/em/%/px)");
        console.log(unite, newSize);
        
        this.txtSize = `${newSize}${unite}`;
    }
}
