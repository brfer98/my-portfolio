import { afterNextRender, Component, OnInit } from '@angular/core';
import textos from '../../../assets/data/home.json';
import gsap from 'gsap';
import { Header } from '../../components/header/header';
import { App } from '../../app';
import { TechCard } from '../../components/tech-card/tech-card';
import { HomeInterfaceTs } from './models/home.interface.ts';
import { ɵNbBorderCapability, NbText, NbSplit, NbStack, NbAvatar, NbDisplay, NbCluster, NbChip, NbTitle, NbCard, NbCardTitle, NbCardHeader, NbCardContent, NbIconButton, NbCardActions, NbCardFooter, NbButton, NbMediaFrame, NbChipGroup, NbIcon, NbStatusDot, NbBadge, NbStat, NbSurface } from '@ng-brutalism/ui';


@Component({
  selector: 'app-home',
  imports: [Header, TechCard, ɵNbBorderCapability, NbText, NbSplit, NbAvatar, NbStack, NbDisplay, NbCluster, NbChip, NbTitle, NbCard, NbCardTitle, NbCardHeader, NbCardContent, NbIconButton, NbCardActions, NbCardFooter, NbButton, NbMediaFrame, NbChipGroup, NbIcon, NbStatusDot, NbBadge, NbStat, NbSurface],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnInit{
	// datos recibidos del json
  text = textos;

  jobs = this.text.es.experience.company.reverse();
  techs = this.text.es.technologies.techs;
  projects = this.text.es.projects;
  projects_cards = this.text.es.projects.projects;
  contact = this.text.es.contact;

  columnas = new Array(3);

  proyectos: HomeInterfaceTs[] = [];
  
  constructor() {
    afterNextRender(() => {
      // espera a que la pagina se haya renderizado y luego ejecuta esto
      gsap.from(".hero-fade-in", {
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

      // array de todos los elementos con la clsae gsap-fade-in
      gsap.utils.toArray(".gsap-fade-in").forEach((e: any) => {
        gsap.from(e, {
          scrollTrigger: {
            trigger: e,
            start: "top 80%" // determina la altura necesaria del elememento para ejecutar la animacion
          },
          opacity: 0,
          y: 20,
          duration: 3, 
          ease: "power3.out"
        });
      })
    });
  }

  ngOnInit(): void {
    this.proyectos = this.text.es.projects.projects;
  }
  
  scrollFooter() {
    if (App.lenis) {
      App.lenis.scrollTo("#footer");
    }
  }
  
}
