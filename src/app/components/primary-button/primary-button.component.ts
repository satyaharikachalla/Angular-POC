import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
@Input() label = '';
@Input() isDisabled = false;
 @Output() btnClicked = new EventEmitter<string>();
 handleButtonClick() {
   console.log('Button clicked');
   this.btnClicked.emit(this.label);
 }
}
