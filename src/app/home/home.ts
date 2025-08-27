import { Component, EventEmitter, Output } from '@angular/core';
import { Projects } from './projects/projects';
import { NavigationButton } from "../shared/navigation-button/navigation-button";


@Component({
  selector: 'app-home',
  imports: [Projects, NavigationButton],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  @Output() modeChange = new EventEmitter<string>();

  selectMode(value: string) {
    this.modeChange.emit(value);
    console.log(`Home mode changed to: ${value}`);
  }


}
