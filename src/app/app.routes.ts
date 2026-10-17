import { Routes } from '@angular/router';
import { FiltroProductos } from './Component/filtro-productos/filtro-productos';
import { ConsumoProductos } from './Component/consumo-productos/consumo-productos';
import { ListaProductos } from './Component/lista-productos/lista-productos';

export const routes: Routes = [
  { path: 'productos', component: ConsumoProductos },
  { path: 'filtro', component: FiltroProductos },
  { path: 'lista', component: ListaProductos }
];