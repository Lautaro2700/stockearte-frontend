import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { Store } from 'src/app/models/stores';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-stores',
  templateUrl: './manage-stores.component.html',
  styleUrls: ['./manage-stores.component.css']
})
export class ManageStoresComponent implements OnInit {
  stores : Store[] = [];
  filteredStores: Store[] = [];
  filterForm: FormGroup;
  activeFilter: boolean = false;
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){
    this.filterForm = new FormGroup({
      filter: new FormControl("", [Validators.required, Validators.pattern(/^[^<>]+$/)])
    });
  }
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
        id: 2,
        code: '1234EEE2',
        address: '1235 Calle Falsa',
        city: 'Lomas',
        province: 'Bs As',
        enabled: false
      }
    ];
    this.filteredStores = this.stores;
  }
  searchStore() {
    const searchTerm = this.filterForm.get('filter')?.value.toLowerCase();
    if (searchTerm) {
      this.filteredStores = [
        {
          id: 1,
          code: '1234EEE2',
          address: '1235 Calle Falsa',
          city: 'Lomas',
          province: 'Bs As',
          enabled: false
        }
      ];
    } else {
      this.filteredStores = this.stores;
    }
    this.activeFilter = true;
  }
  cleanFilter() {
    this.filteredStores = this.stores;
    this.activeFilter = false;
    this.filterForm.get('filter')?.setValue('');
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
