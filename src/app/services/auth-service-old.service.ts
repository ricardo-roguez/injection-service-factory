import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceOldService implements AuthService {
  doLogin(): void {
    console.log("Old service Login");
  }

  doLogout(): void {
    console.log("Old service Logout");
  }
}
