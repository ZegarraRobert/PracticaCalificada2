import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../../Datos/producto';
import { FiltroAvanzadoPipe } from '../../Pipes/filtro-avanzado-pipe';

@Component({
  selector: 'app-filtro-productos',
  imports: [ReactiveFormsModule, CommonModule, FiltroAvanzadoPipe],
  templateUrl: './filtro-productos.html',
  styleUrl: './filtro-productos.scss',
})
export class FiltroProductos {
  productos: Producto[] = [
    new Producto('001', 'Gaseosa', 'Bebidas', 3.5),
    new Producto('002', 'Galleta', 'Snacks', 1.5),
    new Producto('003', 'Chocolate', 'Snacks', 4.5),
    new Producto('004', 'Agua mineral', 'Bebidas', 2),
    new Producto('005', 'Mouse HP', null, 20.5),
  ];

  form = signal<FormGroup>(
    new FormGroup({
      campo: new FormControl('nombre'),
      termino: new FormControl('')
    })
  );
}