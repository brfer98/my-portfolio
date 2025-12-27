import { Component } from '@angular/core';
import textos from '../../../assets/data/home.json';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
	fecha = new Date().getDate();
	text = textos;
}


