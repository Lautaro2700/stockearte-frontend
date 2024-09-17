import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-formulario-usuarios',
    templateUrl: './formulario-usuarios.component.html',
    styleUrls: ['./formulario-usuarios.component.css']
  })
  export class FormularioUsuariosComponent implements OnInit {
  
    formulario: FormGroup = new FormGroup({
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required)
      });

    constructor(private usuarioService: UsuarioService) { }
  
    ngOnInit(): void {
    }
  
    crearUsuario() {
      if (this.formulario.valid) {
        this.usuarioService.crearUsuario(this.formulario.value).subscribe((response: any) => {
          console.log(response);
        });
      }
    }
  
  }