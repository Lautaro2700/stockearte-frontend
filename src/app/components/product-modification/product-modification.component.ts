import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-product-modification',
  templateUrl: './product-modification.component.html',
  styleUrls: ['./product-modification.component.css']
})
export class ProductModificationComponent {
  validateProduct: FormGroup;
  response: string | undefined;
  productId!: number;

  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.getProduct(this.productId);
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
  getProduct(id: number): void {
    //llamada al servicio {}
    /*
      this.validateImage.patchValue({
        code: this.store.code,
        name: this.store.name,
        size: this.store.size,
        color: this.store.color,
        photo: this.store.photo,
      });
    */
  }
  index() {
    this.router.navigate(['/stores']);
  }
  logout() {
    this.authenticationService.logout();
  }
}