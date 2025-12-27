import { Component } from '@angular/core';
import textos from '../../../assets/data/footer.json';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  text = textos;

}
