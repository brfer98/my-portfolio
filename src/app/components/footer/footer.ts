import { Component } from '@angular/core';
import textos from '../../../assets/data/footer.json';
import { NbDisplay, NbTitle } from '@ng-brutalism/ui';

@Component({
  selector: 'app-footer',
  imports: [NbDisplay, NbTitle],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  text = textos;
  svgWidth: number = 30;
}
