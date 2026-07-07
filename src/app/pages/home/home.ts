import { afterNextRender, Component } from '@angular/core';
import textos from '../../../assets/data/home.json';
import gsap from 'gsap';
import { Header } from '../../components/header/header';
import { App } from '../../app';
import { TechCard } from '../../components/tech-card/tech-card';
import { ɵNbBorderCapability, NbText, NbSplit, NbStack, NbAvatar, NbDisplay, NbCluster, NbChip, NbTitle, NbCard, NbCardTitle, NbCardHeader, NbCardContent, NbIconButton } from '@ng-brutalism/ui';


@Component({
  selector: 'app-home',
  imports: [Header, TechCard, ɵNbBorderCapability, NbText, NbSplit, NbAvatar, NbStack, NbDisplay, NbCluster, NbChip, NbTitle, NbCard, NbCardTitle, NbCardHeader, NbCardContent, NbIconButton],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home{
	// datos recibidos del json
  text = textos;
  jobs = this.text.es.experience.company.reverse();
  techs = this.text.es.technologies.techs;

  columnas = new Array(3);
  
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
            start: "top 100%" // determina la altura necesaria del elememento para ejecutar la animacion
          },
          opacity: 0,
          y: 20,
          duration: 3, 
          ease: "power3.out"
        });
      })
    });
  }
  
  scrollFooter() {
    if (App.lenis) {
      App.lenis.scrollTo("#footer");
    }
  }
  
}
