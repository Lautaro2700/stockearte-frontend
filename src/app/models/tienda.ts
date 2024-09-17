import { Producto } from './producto';

export interface Tienda {
  id?: number;// Opcional, porque al crear un nuevo usuario no tenemos el ID definido  ( aun no ingreso a la base para ser asignado).
  code: string;
  address: string;
  city: string;
  province: string;
  enabled: boolean;
  products: Producto[]; 
}
