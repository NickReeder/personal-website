import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TimelineItem } from "../timeline-item/timeline-item";
import { WorkService } from '../work.service';





@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineItem],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  @Output() itemSelection = new EventEmitter<string>();

  workService = inject(WorkService)

  workHistory = this.workService.getWorkHistory()
  
   
  onTimelineItemSelect(id: string) {
    console.log('Clicked item with id:', id);
    this.itemSelection.emit(id);

    
   }


  
  

}
