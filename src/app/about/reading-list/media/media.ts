import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media {
  @Input() title!: string;
  @Input() author!: string;
  @Input() image!: string;
  @Input() review!: string;

  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
