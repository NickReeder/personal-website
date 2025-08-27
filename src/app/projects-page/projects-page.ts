import { Component } from '@angular/core';
import { ProjectService } from '../shared/project-service';
import { Project } from '../shared/project/project';

@Component({
  selector: 'app-projects-page',
  imports: [Project],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css'
})
export class ProjectsPage {

  projectService = new ProjectService()

  projects = this.projectService.projectData

  

}
