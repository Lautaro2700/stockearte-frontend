import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-store-modification',
  templateUrl: './store-modification.component.html',
  styleUrls: ['./store-modification.component.css']
})
export class StoreModificationComponent {
  validateStore: FormGroup;
  response: string | undefined;
  storeId!: number;
  usersList: number[] = [];
  productsList: number[] = [];

  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validateStore = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      province: new FormControl('', [Validators.required, Validators.maxLength(50)]),    
      users: new FormControl([], Validators.required),
      products: new FormControl([], Validators.required),
      enabled: new FormControl('1'),
    });
  }
  ngOnInit() {
    this.getUsers();
    this.getProducts();
    this.route.params.subscribe(params => {
      this.storeId = params['storeId'];
      this.getStore(this.storeId);
    });
  }
  onSubmit(): void {
    this.response = "";
    if (this.validateStore.valid) {
      const code = this.validateStore.get('code')?.value;
      const address = this.validateStore.get('address')?.value;
      const city = this.validateStore.get('city')?.value;
      const province = this.validateStore.get('province')?.value;
      const users = this.validateStore.get('users')?.value;
      const products = this.validateStore.get('products')?.value;
      const enabled = this.validateStore.get('enabled')?.value;
      this.editStore(code, address, city, province, users, products, enabled)
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  getUsers(){
    this.usersList = []
    //llamada al servicio {}
    this.usersList = [1, 2, 3];
  }
  getProducts(){
    this.productsList = []
    //llamada al servicio {}
    this.productsList = [1, 2, 3];
  }
  editStore(code: string, address: string, city: string, province: string, users: number[], products: number[], enabled: boolean): void {
    //llamada al servicio{}
    this.router.navigate(["/stores"]);
  }
  getStore(id: number): void {
    //llamada al servicio {}
    /*
      this.validateImage.patchValue({
        code: this.store.code,
        address: this.store.address,
        city: this.store.city,
        province: this.store.province,
        users: this.store.users,
        stores: this.store.stores,
        enabled: this.store.enabled ? '1' : '0'
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
