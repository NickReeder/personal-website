import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
// import { Home } from "./home/home";
// import { About } from "./about/about";
import { CommonModule } from '@angular/common';
import { Footer } from "./shared/footer/footer";
// import { NavigationButton } from "./shared/navigation-button/navigation-button";
// import { Work } from "./work/work";
// import { ProjectPage } from "./project-page/project-page";

export type Mode = 'home' | 'about' | 'contact';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  mode = 'home'

  changeMode(value: string) {
    console.log(`App mode changed to: ${value}`);
    this.mode = value;
  }
  



  protected readonly title = signal('personal-website');
}
