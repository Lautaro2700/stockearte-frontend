import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    private apiUrl = 'https://proyecto-distribuidos.com/api/usuarios'; // cambiar esta ruta por el endpoint real

    constructor(private http: HttpClient){}

    obtenerUsuarios(): Observable<any> {
        return this.http.get(this.apiUrl);
      }
    
      crearUsuario(usuario: any): Observable<any> {
        return this.http.post(this.apiUrl, usuario);
      }
}