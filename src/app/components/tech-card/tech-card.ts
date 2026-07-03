import { Component, inject, input, computed, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NbSurface, NbDisplay } from "@ng-brutalism/ui";

@Component({
  selector: 'app-tech-card',
  imports: [NbSurface, NbDisplay],
  templateUrl: './tech-card.html',
  styleUrl: './tech-card.scss',
})
export class TechCard {
  private sanitizer = inject(DomSanitizer);

  svgWidth: number = 40;

  tituloSvg = input.required<string>();
  svgRaw = input.required<string>();

  svgSeguro = computed<SafeHtml>(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.svgRaw());
  });
  

}
