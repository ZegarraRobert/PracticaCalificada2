export class Producto {
  constructor(
    public codigo: string,
    public nombre: string,
    public categoria: string | null,
    public precio: number
    
  ) {}
}