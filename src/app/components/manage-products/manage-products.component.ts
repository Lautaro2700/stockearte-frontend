import { Component, OnInit } from '@angular/core';
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
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){}
  ngOnInit() {
    this.getProducts();
  }  
  getProducts(){
    this.products = []
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
