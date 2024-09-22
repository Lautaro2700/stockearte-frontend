import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users : User[] = [];
  filteredUsers: User[] = [];
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
    this.getUsers();
  }
  getUsers(){
    this.users = []
    //llamada al servicio {}
    this.users = [
      {
        id: 1,
        username: '202PEdro10',
        password: '123',
        firstName: 'Pedro',
        lastName: 'Picapiedra',
        enabled: true,
        storeId: 1,
        storeCode: '23east'
      },
      {
        id: 1,
        username: '202PEdro120',
        password: '124',
        firstName: 'Pedro4',
        lastName: 'Picapiedra',
        enabled: true,
        storeId: 2,
        storeCode: '23west'
      }
    ];
    this.filteredUsers = this.users; // initialize filteredUsers with all users
  }
  searchUser() {
    const searchTerm = this.filterForm.get('filter')?.value.toLowerCase();
    if (searchTerm) {
      this.filteredUsers = [
        {
          id: 1,
          username: '202PEdro120',
          password: '124',
          firstName: 'Pedro4',
          lastName: 'Picapiedra',
          enabled: true,
          storeId: 2,
          storeCode: '24east'
        }
      ];
    } else {
      this.filteredUsers = this.users;
    }
    this.activeFilter = true;
  }
  cleanFilter() {
    this.filteredUsers = this.users;
    this.activeFilter = false;
    this.filterForm.get('filter')?.setValue('');
  }
  disableUser(id: number, username: string, password: string, firstName: string, lastName: string, enabled: boolean): void {
    //llamada al servicio {}
  }
  createUser(){
    this.router.navigate(['/user/creation']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
