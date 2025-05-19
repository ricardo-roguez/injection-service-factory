import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {environment} from '../environments/environment';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'injection-service-factory';
  isProduction = environment.production;
  private authService = inject(AuthService);
  constructor() {
    this.authService.doLogin();
  }
}
