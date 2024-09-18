import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { Stocks } from 'src/app/models/stocks';

@Component({
  selector: 'app-manage-stocks',
  templateUrl: './manage-stocks.component.html',
  styleUrls: ['./manage-stocks.component.css']
})
export class ManageStocksComponent implements OnInit {
  stocks : Stocks[] = [];
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){}
  ngOnInit() {
    this.getStocks();
  }  
  getStocks(){
    this.stocks = []
    //llamada al servicio {}
    this.stocks = [
      {
        id: 1,
        storeId: 10,
        productId: 15,
        quantity: 10
      },
      {
        id: 2,
        storeId: 14,
        productId: 20,
        quantity: 15
      }
    ];
  }
  deleteStock(id: number): void {
    //llamada al servicio {}
  }
  createStock(){
    this.router.navigate(['/stock/creation']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
