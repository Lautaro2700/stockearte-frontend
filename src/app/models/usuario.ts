import { Tienda } from "./tienda";

export interface Usuario {
    id?: number; // Opcional, porque al crear un nuevo usuario no tenemos el ID definido  ( aun no ingreso a la base para ser asignado).
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    enabled: boolean;
    store: Tienda;
  }
  