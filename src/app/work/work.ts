import { Component, EventEmitter, Output } from '@angular/core';
import { Timeline } from "./timeline/timeline";
import { FocusItem } from "./focus-item/focus-item";




@Component({
  selector: 'app-work',
  imports: [Timeline, FocusItem],
  templateUrl: './work.html',
  styleUrl: './work.css'
})
export class Work {


  selectedItem = '0'

  // @Output changeFocus = new EventEmitter<string>();

  changeWork(value: string) {
    console.log(`work selection changed to: ${value}`);
    this.selectedItem = value;

  }

}
