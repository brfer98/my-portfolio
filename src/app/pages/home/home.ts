import { Component } from '@angular/core';
import textos from '../../../assets/data/home.json';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
	// datos recibidos del json
  text = textos;
  jobs = this.text.es.experience.company.reverse();
  
  svgWidth: number = 40;
}
