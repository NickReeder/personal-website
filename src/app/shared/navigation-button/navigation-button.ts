import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  imports: [RouterModule],
  templateUrl: './navigation-button.html',
  styleUrl: './navigation-button.css'
})
export class NavigationButton {

  @Input() text!: string;
  @Input() link!: string;


  @Output() newMode = new EventEmitter<string>();

  // onClick() {
  //   this.newMode.emit(this.value);
  //   console.log(`Navigation button clicked: ${this.value}`);
  // }
}

