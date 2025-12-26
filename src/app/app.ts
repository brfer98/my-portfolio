import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Footer],
  templateUrl: './app.html',
  // template: '<h1>ola</h1>',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-bruno');
}
