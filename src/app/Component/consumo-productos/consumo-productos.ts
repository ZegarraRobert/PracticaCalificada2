import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Producto } from '../../../Datos/producto';
import { ProductoJsonService } from '../../Services/producto-json-service';

@Component({
  selector: 'app-consumo-productos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './consumo-productos.html',
  styleUrl: './consumo-productos.scss',
})
export class ConsumoProductos implements OnInit {
  protected productos = signal<Producto[]>([]);
  protected encontrado = signal<Producto | null>(null);

  form = signal<FormGroup>(
    new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      categoria: new FormControl(''),
      precio: new FormControl('')
    })
  );

  formBuscar = signal<FormGroup>(
    new FormGroup({
      id: new FormControl('')
    })
  );

  formPrecio = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      precio: new FormControl('')
    })
  );

  constructor(private prodservice: ProductoJsonService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.prodservice.listarProductos().subscribe(data => {
      this.productos.set(data);
    });
  }

  buscar(): void {
    const id = Number(this.formBuscar().value.id);
    this.encontrado.set(null);
    this.prodservice.obtenerProductoPorId(id).subscribe(data => {
      this.encontrado.set(data);
    });
  }

  registrar(): void {
    const f = this.form().value;
    const nuevo = new Producto(f.codigo, f.nombre, f.categoria, Number(f.precio));
    this.prodservice.crearProducto(nuevo).subscribe(() => {
      this.form().reset();
      this.cargarProductos();
    });
  }

  modificarPrecio(): void {
    const f = this.formPrecio().value;
    const id = Number(f.id);
    const p = this.productos().find(x => x.id === id);
    if (p) {
      const actualizado = new Producto(p.codigo, p.nombre, p.categoria, Number(f.precio), p.id);
      this.prodservice.actualizarProducto(id, actualizado).subscribe(() => {
        this.formPrecio().reset();
        this.cargarProductos();
      });
    }
  }

  eliminar(id: number): void {
    this.prodservice.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }
}