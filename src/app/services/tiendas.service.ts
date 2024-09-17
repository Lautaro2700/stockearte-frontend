import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TiendasService {
    private apiUrl = 'https://proyecto-distribuidos.com/api/tiendas';

    constructor(private http: HttpClient){}

    obtenerTiendas(): Observable<any> {
        return this.http.get(this.apiUrl);
      }
    
      crearTiendas(usuario: any): Observable<any> {
        return this.http.post(this.apiUrl, usuario);
      }
}