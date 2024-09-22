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
  storesList: string[] = [];

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.validateProduct = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      size: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      photo: new FormControl(),
      stores: new FormControl([], Validators.required),
    });
  }
  ngOnInit() {
    this.getStores();
  }
  getStores(){
    this.storesList = []
    //llamada al servicio {}
    this.storesList = ['123WWW', '123WEE', '000X0X'];
  }
  onSubmit(): void {
    this.response = "";
    if (this.validateProduct.valid) {
      const name = this.validateProduct.get('name')?.value;
      const size = this.validateProduct.get('size')?.value;
      const color = this.validateProduct.get('color')?.value;
      const photo = this.validateProduct.get('photo')?.value;
      const stores = this.validateProduct.get('stores')?.value;
      this.registerProduct(name, size, color, photo, stores);
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  registerProduct(name: string, size: string, color: string, photo: number, stores: string[]): void {
    // Call your service to register the product with the selected categories
    this.router.navigate(["/products"]);
  }
  logout() {
    this.authenticationService.logout();
  }
}
