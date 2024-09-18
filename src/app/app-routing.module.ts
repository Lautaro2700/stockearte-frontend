import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuariosComponent } from './components/usuarios/formulario-usuarios.component';
import { ManageStocksComponent } from './components/manage-stocks/manage-stocks.component';
import { ManageStoresComponent } from './components/manage-stores/manage-stores.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AuthService } from './services/auth-service';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'crear-usuario', pathMatch: 'full' },
  {path: 'crear-usuario', component: FormularioUsuariosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'stores', component: ManageStoresComponent, canActivate: [AuthService] },
  {path: 'products', component: ManageProductsComponent, canActivate: [AuthService] },
  {path: 'stocks', component: ManageStocksComponent, canActivate: [AuthService] },
  {path: 'users', component: ManageUsersComponent, canActivate: [AuthService] },
  {path: '**', redirectTo: '/stores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
