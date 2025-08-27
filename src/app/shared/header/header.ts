import { Component, EventEmitter, input, Output } from '@angular/core';
import { NavigationButton } from '../navigation-button/navigation-button';


// export type Mode = 'home' | 'about' | 'contact';

interface NavItem{
label: string;
link: string;
}

@Component({
  selector: 'app-header',
  imports: [NavigationButton],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  // currentMode = input.required<Mode>();
  @Output() modeChange = new EventEmitter<string>();

  selectMode(value: string) {
    this.modeChange.emit(value);
    console.log(`Header mode changed to: ${value}`);
  }



}
