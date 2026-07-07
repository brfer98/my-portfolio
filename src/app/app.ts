import { AfterViewInit, Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import Lenis from "lenis"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements AfterViewInit{
  protected readonly title = signal('portfolio-bruno');
  public static lenis:Lenis;

  ngAfterViewInit(){
    gsap.registerPlugin(ScrollTrigger);
    App.lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1
    });
    
    App.lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      App.lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

  }
}
