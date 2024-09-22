import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-user-modification',
  templateUrl: './user-modification.component.html',
  styleUrls: ['./user-modification.component.css']
})
export class UserModificationComponent {
  validateUser: FormGroup;
  response: string | undefined;
  userId!: number;

  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.getUser(this.userId);
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
      this.editUser(username, password, firstName, lastName, storeId, enabled)
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  editUser(username: string, password: string, fistName: string, lastName: string, storeId: number, enabled: boolean): void {
    //llamada al servicio{}
    this.router.navigate(["/users"]);
  }
  getUser(id: number): void {
    //llamada al servicio {}
    /*
      this.validateImage.patchValue({
        username: this.store.username,
        password: this.store.password,
        firstName: this.store.firstName,
        lastName: this.store.lastName,
        storeId: this.store.storeId,
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
