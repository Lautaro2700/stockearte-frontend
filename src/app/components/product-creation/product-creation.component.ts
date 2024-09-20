import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent {
  validateProduct: FormGroup;
  response: string | undefined;

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.validateProduct = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      size: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(20)]),  
      photo: new FormControl(),
    });
  }
  onSubmit(): void {
    this.response = "";
    if (this.validateProduct.valid) {
      const code = this.validateProduct.get('code')?.value;
      const name = this.validateProduct.get('name')?.value;
      const size = this.validateProduct.get('size')?.value;
      const color = this.validateProduct.get('color')?.value;
      const photo = this.validateProduct.get('photo')?.value;
      this.registerProduct(code, name, size, color, photo)
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  registerProduct(code: string, name: string, size: string, color: string, photo: number): void {
    //llamada al servicio{}
    this.router.navigate(["/products"]);
  }
  index() {
    this.router.navigate(['/stores']);
  }
  logout() {
    this.authenticationService.logout();
  }
}