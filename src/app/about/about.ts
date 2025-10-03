import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationButton } from "../shared/navigation-button/navigation-button";
import { ReadingList } from './reading-list/reading-list';


@Component({
  selector: 'app-about',
  imports: [NavigationButton, ReadingList],
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
