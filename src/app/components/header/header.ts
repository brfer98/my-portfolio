import { Component, signal } from '@angular/core';
import texts from '../../../assets/data/header.json';
import { App } from '../../app';
import { NbSection, NbSurface, NbSplit, NbButton, NbCluster, NbIcon, NbText } from "@ng-brutalism/ui";

@Component({
  selector: 'app-header',
  imports: [NbSection, NbSurface, NbSplit, NbButton, NbCluster, NbIcon, NbText],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  text = texts;
  isMenuOpen = signal(false);

  toggleMenu(): void {
    // 3. Usa .update() o .set() para cambiar su valor
    this.isMenuOpen.update(open => !open);
  }
  scrollToExperience() {
    if (App.lenis) {
      App.lenis.scrollTo("#experience");
    }
  }
  scrollToStack() {
    if (App.lenis) {
      App.lenis.scrollTo("#stack");
    }
  }
  scrollToProjects() {
    if (App.lenis) {
      App.lenis.scrollTo("#projects");
    }
  }
}
