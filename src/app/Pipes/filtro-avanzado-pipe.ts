import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAvanzado',
  pure: true
})
export class FiltroAvanzadoPipe implements PipeTransform {

  transform<T extends object>(
    items: T[] | null | undefined,
    campoKey: keyof T,
    terminoBusqueda: string | null | undefined
  ): T[] {

    if (!items) {
      return [];
    }
    if (!terminoBusqueda || terminoBusqueda.trim() === '') {
      return items;
    }

    const termino = terminoBusqueda.trim().toLowerCase();

    return items.filter(item => {
      if (item === null || item === undefined) {
        return false;
      }
      const valor = item[campoKey];
      if (valor === null || valor === undefined) {
        return false;
      }
      return String(valor).toLowerCase().includes(termino);
    });
  }
}