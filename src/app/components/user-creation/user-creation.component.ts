import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent {
  validateUser: FormGroup;
  response: string | undefined;

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.validateUser = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),  
      storeId: new FormControl(),
      enabled: new FormControl('1'),
    });
  }
  onSubmit(): void {
    this.response = "";
    if (this.validateUser.valid) {
      const username = this.validateUser.get('username')?.value;
      const password = this.validateUser.get('password')?.value;
      const firstName = this.validateUser.get('fistName')?.value;
      const lastName = this.validateUser.get('lastName')?.value;
      const storeId = this.validateUser.get('storeId')?.value;
      const enabled = this.validateUser.get('enabled')?.value;
      this.registerUser(username, password, firstName, lastName, storeId, enabled)
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  registerUser(username: string, password: string, fistName: string, lastName: string, storeId: number, enabled: boolean): void {
    //llamada al servicio{}
    this.router.navigate(["/users"]);
  }
  index() {
    this.router.navigate(['/stores']);
  }
  logout() {
    this.authenticationService.logout();
  }
}
