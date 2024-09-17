import { Tienda } from './tienda'; 

export interface Producto {
  id?: number;// Opcional, porque al crear un nuevo usuario no tenemos el ID definido  ( aun no ingreso a la base para ser asignado).
  code: string;
  name: string;
  size: string;
  color: string;
  photo: string;
  stores: Tienda[];
}
