import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceNewService implements AuthService {
  doLogin(): void {
    console.log("New service Login");
  }

  doLogout(): void {
    console.log("New service Logout");
  }
}
