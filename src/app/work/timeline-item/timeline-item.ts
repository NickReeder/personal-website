import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.css'
})
export class TimelineItem {

  @Input() logo!: string;
  @Input() class!: string;
  @Input() title!: string;
  @Input() company!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() description!: string;
  @Input() id!: string;

  @Output() select = new EventEmitter<string>();

  onClick() {
    this.select.emit(this.id);
    console.log(`Timeline item clicked: ${this.id}`);
  }

}
