import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Footer],
  templateUrl: './app.html',
  // template: '<h1>ola</h1>',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-bruno');
}
