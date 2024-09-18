import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { Store } from 'src/app/models/stores';

@Component({
  selector: 'app-manage-stores',
  templateUrl: './manage-stores.component.html',
  styleUrls: ['./manage-stores.component.css']
})
export class ManageStoresComponent implements OnInit {
  stores : Store[] = [];
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){}
  ngOnInit() {
    this.getStores();
  }  
  getStores(){
    this.stores = []
    //llamada al servicio {}
    this.stores = [
      {
        id: 1,
        code: '1234EEEE',
        address: '1234 Calle Falsa',
        city: 'Lanus',
        province: 'Bs As',
        enabled: true
      },
      {
        id: 1,
        code: '1234EEE2',
        address: '1235 Calle Falsa',
        city: 'Lomas',
        province: 'Bs As',
        enabled: false
      }
    ];
  }
  disableStore(id: number, code: string, address: string, city: string, province: string, enabled: boolean): void {
    //llamada al servicio {}
  }
  deleteStore(id: number): void {
    //llamada al servicio {}
  }
  createStore(){
    this.router.navigate(['/store/creation']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
