import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products : Product[] = [];
  filteredProducts: Product[] = [];
  filterForm: FormGroup;
  activeFilter: boolean = false;
  showElement: boolean = false;
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){
    this.filterForm = new FormGroup({
      filter: new FormControl("", [Validators.required, Validators.pattern(/^[^<>]+$/)])
    });
  }
  ngOnInit() {
    const storeId = localStorage.getItem('storeId');
    this.showElement = storeId == '0'
    this.getProducts(this.showElement);
  }  
  getProducts(showElement: boolean){
    if(showElement){
      this.products = []
      //si es usuario de casa central = 0, se muestran todos los productos
      //llamada al servicio {}
      this.products = [
        {
          id: 1,
          code: 'PROD001',
          name: 'T-Shirt',
          size: 'L',
          color: 12345,
          photo: 67890
        },
        {
          id: 2,
          code: 'PROD002',
          name: 'Jeans',
          size: 'M',
          color: 54321,
          photo: 98765
        }
      ];
    }
    else{      
      //si es usuario de tienda, solo se muestran los productos de la tienda
      //llamada al servicio {}
      this.products = [
        {
          id: 2,
          code: 'PROD002',
          name: 'Jeans',
          size: 'M',
          color: 54321,
          photo: 98765
        }
      ];
    }
    this.filteredProducts = this.products;
  }
  searchProduct() {
    const searchTerm = this.filterForm.get('filter')?.value.toLowerCase();
    if (searchTerm) {
      this.filteredProducts = [
        {
          id: 2,
          code: 'PROD002',
          name: 'Jeans',
          size: 'M',
          color: 54321,
          photo: 98765
        }
      ];
    } else {
      this.filteredProducts = this.products;
    }
    this.activeFilter = true;
  }
  cleanFilter() {
    this.filteredProducts = this.products;
    this.activeFilter = false;
    this.filterForm.get('filter')?.setValue('');
  }
  deleteProduct(id: number): void {
    //llamada al servicio {}
  }
  createProduct(){
    this.router.navigate(['/product/creation']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
