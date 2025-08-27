import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/project-service';
import { project } from '../../shared/project-service';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  project!: project | undefined;

  constructor(private route: ActivatedRoute) {}
  projectService = new ProjectService()

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.projectData.find(p => p.link === projectId);
  }


  

  

}
