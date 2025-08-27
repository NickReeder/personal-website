import { Injectable } from "@angular/core";

export interface Job {
  id: string;
  img: string;
  type: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: Array<string>;
}
@Injectable({
  providedIn: 'root'
})
export class WorkService {
 
    workHistory: Job[] = [
    {
      id: '6',
      img: './assets/Booz.png',
      type: 'company-logo-rect',
      title: 'Staff Data Scientist',
      company: 'Booz Allen Hamilton',
      startDate: 'July 2025',
      endDate: 'Present',
      description: `As a Staff Data Scientist I worked on two major efforts:
      <br>
      <br>
      The first was an internal admin app that overhauled Project Management and Customer Reletaions Management. This was a complete end to end development with Power Apps and Power Automate that transitioned the old process of updating an Power Point and managing tactical sales by email
      and tranistioned them to a live power app and connected MS Dataverse Database
      <br>
      <br>      
      The second effort I supported was a process overhaul for Air Combat Command's (ACC) A5W Weather System Requirments system. This effort is ongoing..`,
      skills: ['a', 'b']
      
    },
    {
      id: '5',
      img: './assets/Booz.png',
      type: 'company-logo-rect',
      title: 'Data Scientist',
      company: 'Booz Allen Hamilton',
      startDate: 'June, 2024',
      endDate: 'June, 2025',
      description: `Worked on a team that developed a readiness analytics tool focusing on both current and predictive  readiness across five domains: Equipment, Consumables, Human-capitol, Ordnance, and Squadron training (ECHOS). While on this project I utilized Python, SQL, and Databricks to modernize the data pipeline, converting 3 years of isolated Tableau Prep Flows to efficient and automated Python Scripts and a relational database. I additionally developed predictive analytics and machine learning across multiple domains and set up code reviews/audits. 
	Pitched and prototyped cross-domain models such as Generative SQL for custom database querying, Schedule Optimizers, Component Survival Analysis. 
  <br>
  <br>
Built a Power App to solve the team's biggest data challenge: pilot training qualifications. This app was designed to take hundreds of inaccessible training documents, convert them to a computer readable format, and store them in an CAC protected database. This app was initially implemented for a subset of 30 combat and non-combat units. After meeting with stakeholders and reviewing feedback, client intended to expand command wide.
      `,
      skills: ['a', 'b']

    },
    {
      id: '4',
      img: 'TCCP.jpg',
      type: 'company-logo-square',
      title: 'Lead Line Cook',
      company: 'Town Center Cold Pressed',
      startDate: 'May 2024',
      endDate: 'October 2023',
      description: `Stood up, organized, and ran the food side of the on-campus location of Town Center Cold Pressed. I oversaw training, quality assurance, and customer relations. Managed a team of aproximatly 10 cooks,
      as well as other staff members who would flex over to food side. Most of these cooks were new to food service which meant I was responsible for not just skill training, but also safety and process training.`,
      skills: ['a', 'b']

    },
    {
      id: '3',
      img: 'nasa.png',
      type: 'company-logo-rect',
      title: 'Research Assistant',
      company: 'NASA/William & Mary',
      startDate: 'June 2023',
      endDate: 'August 2023',
      description: `Worked on Surrogate Analysis and Predictive modeling with the NASA Langley hypersonic flight team. My work focused on modeling heat shield temperature gain to replace high-cost testing and supercomputer 
      simulations. Primary methods were Lasso, Random Forest, and Support Vector Regressions. Mentored local highschoolers about statistics/analysis, data science, Python, and R.`,
      skills: ['a', 'b']

    },
    {
      id: '2',
      img: 'flathat.png',
      type: 'company-logo-rect',
      title: 'Data Section Editior',
      company: 'The Flat Hat',
      startDate: 'January 2021',
      endDate: 'January 2023',
      description: `Managed the Data Section of the Flat Hat (William &amp; Mary’s student newspaper), processed data, led internal
analytics projects to improve readership, wrote stories, and trained writers to translate technical topics for non-
technical readers.`,
  skills: ['a', 'b']

    },
    {
      id: '1',
      img: 'pfo.png',
      title: 'Line Cook',
      type: 'company-logo-square',
      company: 'Public Fish and Oyster',
      startDate: 'Summer 2021',
      endDate: 'Summer 2022',
      description: `Worked as a line cook at locally acclaimed Public Fish and Oyster.`,
      skills: ['a', 'b']

    },
  ]

  getWorkHistory(){
    return this.workHistory
  }
}