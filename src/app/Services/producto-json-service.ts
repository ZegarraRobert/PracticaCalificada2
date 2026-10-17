import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../Datos/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoJsonService {
  private APIUrl: string = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.APIUrl);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.APIUrl}/${id}`);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.APIUrl, producto);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.APIUrl}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.APIUrl}/${id}`);
  }
}