import { AfterViewInit, Component } from '@angular/core';
import textos from '../../../assets/data/home.json';
import gsap from 'gsap';
import { App } from '../../app';
import { TechCard } from '../../components/tech-card/tech-card';


@Component({
  selector: 'app-home',
  imports: [TechCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements AfterViewInit{
	// datos recibidos del json
  text = textos;
  jobs = this.text.es.experience.company.reverse();
  techs = this.text.es.technologies.techs;

  columnas = new Array(3);
  


  // gsap animations
  ngAfterViewInit(){
    // gsap.to(".hero-btn", {rotation: 360, x: 0, duration: 1});

    gsap.from(".gsap-hero-fade-in", {
      opacity: 0, 
      y: 20,
      duration: 3, 
      ease: "power3.out",
      stagger: 0.4
    })

    gsap.from(".hero-btn", {
      opacity: 0, 
      y: 20,
      duration:5, 
      ease: "power2.out"
    })
  }

  scrollFooter() {
    if (App.lenis) {
      App.lenis.scrollTo("#footer");
    }
  }
  
}
