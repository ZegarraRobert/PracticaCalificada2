import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltroProductos } from './Component/filtro-productos/filtro-productos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FiltroProductos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PracticaCalificada2');
}
