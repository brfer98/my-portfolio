import { Component } from '@angular/core';
import texts from '../../../assets/data/header.json';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  text = texts;
}
