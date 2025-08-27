// This should be moved to its own forlder but this is fine for now

import { Component } from '@angular/core';
import { Project } from "../../shared/project/project";

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
