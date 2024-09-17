import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuariosComponent } from './components/usuarios/formulario-usuarios.component';


const routes: Routes = [
  { path: '', redirectTo: 'crear-usuario', pathMatch: 'full' },
  {path: 'crear-usuario', component: FormularioUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
