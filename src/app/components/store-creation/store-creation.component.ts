import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-store-creation',
  templateUrl: './store-creation.component.html',
  styleUrls: ['./store-creation.component.css']
})
export class StoreCreationComponent {
  validateStore: FormGroup;
  response: string | undefined;

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.validateStore = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      province: new FormControl('', [Validators.required, Validators.maxLength(50)]),    
      enabled: new FormControl('1'),
    });
  }

  onSubmit(): void {
    this.response = "";
    if (this.validateStore.valid) {
      const code = this.validateStore.get('code')?.value;
      const address = this.validateStore.get('address')?.value;
      const city = this.validateStore.get('city')?.value;
      const province = this.validateStore.get('province')?.value;
      const enabled = this.validateStore.get('enabled')?.value;
      this.registerStore(code, address, city, province, enabled)
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }

  registerStore(code: string, address: string, city: string, province: string, enabled: boolean): void {
    //llamada al servicio{}
    this.router.navigate(["/stores"]);
  }
  index() {
    this.router.navigate(['/stores']);
  }
  logout() {
    this.authenticationService.logout();
  }
}
