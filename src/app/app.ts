import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: '<h1>ola</h1>',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-bruno');
}
