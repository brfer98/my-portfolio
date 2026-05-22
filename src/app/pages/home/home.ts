import { AfterViewInit, Component } from '@angular/core';
import textos from '../../../assets/data/home.json';
import gsap from 'gsap';
import { App } from '../../app';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements AfterViewInit{
	// datos recibidos del json
  text = textos;
  jobs = this.text.es.experience.company.reverse();
  
  svgWidth: number = 40;

  // gsap animations
  ngAfterViewInit(){
    // gsap.to(".hero-btn", {rotation: 360, x: 0, duration: 1});
  }

  scrollFooter() {
    if (App.lenis) {
      App.lenis.scrollTo("#footer");
    }
  }
  
}
