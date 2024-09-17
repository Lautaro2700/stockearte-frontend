import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductosService {
    private apiUrl = 'https://proyecto-distribuidos.com/api/productos';

    constructor(private http: HttpClient){}

    obtenerProductos(): Observable<any> {
        return this.http.get(this.apiUrl);
      }
    
      crearProductos(usuario: any): Observable<any> {
        return this.http.post(this.apiUrl, usuario);
      }
}