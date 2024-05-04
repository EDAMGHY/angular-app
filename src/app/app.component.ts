import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
  public currentRoute: string = 'home';
  constructor(private router: Router) {}

  goTo(path: 'home' | 'products') {
    if (path === 'home') {
      this.router.navigateByUrl('/home');
      this.currentRoute = 'home';
    } else {
      this.router.navigateByUrl('/products');
      this.currentRoute = 'products';
    }
  }
}
