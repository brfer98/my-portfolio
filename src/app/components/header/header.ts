import { Component } from '@angular/core';
import texts from '../../../assets/data/header.json';
import { App } from '../../app';
import { NbSection, NbSurface, NbSplit, NbButton, NbCluster } from "@ng-brutalism/ui";

@Component({
  selector: 'app-header',
  imports: [NbSection, NbSurface, NbSplit, NbButton, NbCluster],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  text = texts;


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
