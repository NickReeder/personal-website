import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationButton } from "../shared/navigation-button/navigation-button";

@Component({
  selector: 'app-about',
  imports: [NavigationButton],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  @Output() modeChange = new EventEmitter<string>();

  selectMode(value: string) {
  this.modeChange.emit(value);
    console.log(`Home mode changed to: ${value}`);
  }

}
