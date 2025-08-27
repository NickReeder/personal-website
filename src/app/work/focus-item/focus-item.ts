import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { title } from 'process';
import { WorkService } from '../work.service';
import { filter } from 'rxjs';
import { Job } from '../work.service';

@Component({
  selector: 'app-focus-item',
  imports: [],
  templateUrl: './focus-item.html',
  styleUrl: './focus-item.css'
})
export class FocusItem {

  workService = inject(WorkService)
  history = this.workService.getWorkHistory()
  
  @Input() id: string = '0';
  j: Job = {
    id: '',
    img: '',
    type: '',
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    skills: []
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['id']){
      this.changeFocus()
    }
  }

  changeFocus(){
    this.j = this.history.filter(role => role.id === this.id)[0]
    console.log('Focus changes to id ', this.j.id)
  }


}
