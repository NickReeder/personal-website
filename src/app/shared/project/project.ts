import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-project',
  imports: [RouterModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  

  title = input.required<string>();
  description = input.required<string>();
  link = input.required<string>();

}
