import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.scss',
})
export class ListaProductos {
  productos = [
    { nombre: 'Gaseosa', precio: 3.5, stock: 10 },
    { nombre: 'Galleta', precio: 1.5, stock: 0 },
    { nombre: 'Chocolate', precio: 4.5, stock: 5 },
    { nombre: 'Mouse HP', precio: 20.5, stock: 0 }
  ];
}