import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users : User[] = [];
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ){}
  ngOnInit() {
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
        storeId: 1
      },
      {
        id: 1,
        username: '202PEdro120',
        password: '124',
        firstName: 'Pedro4',
        lastName: 'Picapiedra',
        enabled: true,
        storeId: 2
      }
    ];
  }
  disableUser(id: number, username: string, password: string, firstName: string, lastName: string, enabled: boolean): void {
    //llamada al servicio {}
  }
  deleteUser(id: number): void {
    //llamada al servicio {}
  }
  createUser(){
    this.router.navigate(['/user/creation']);
  }
  index(){
    this.router.navigate(['/images']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
