import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Work } from './work/work';
import { Projects } from './home/projects/projects';
import { ProjectDetail } from './projects-page/project-detail/project-detail';
import { ProjectsPage } from './projects-page/projects-page';

export const routes: Routes = [
    {
        path: '', 
        component: Home
    },
    {
        path: 'about', 
        component: About
    },
    {
        path: 'contact', 
        component: Home
    },
    {
        path: 'work-history', 
        component: Work
    },
    {
        path: 'projects', 
        component: ProjectsPage
    },
    {
        path: 'projects/:id', 
        component: ProjectDetail
    },

]