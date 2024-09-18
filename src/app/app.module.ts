import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioUsuariosComponent } from './components/usuarios/formulario-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageStocksComponent } from './components/manage-stocks/manage-stocks.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageStoresComponent } from './components/manage-stores/manage-stores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth-service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioUsuariosComponent,
    NavbarComponent,
    LoginComponent,
    ManageProductsComponent,   // Add your components here
    ManageStocksComponent,
    ManageStoresComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
