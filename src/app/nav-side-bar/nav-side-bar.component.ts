import { Component } from '@angular/core';


interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent {

  constructor() { }

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'nav/',
      title: 'Histórico',
    }, {
      icon: 'dashboard',
      route: 'nav/',
      title: 'Balanço',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'contacts',
      route: 'nav/',
      title: 'Categorias',
    }, {
      icon: 'people',
      route: 'nav/',
      title: 'Renda',
    }, {
      icon: 'settings_phone',
      route: 'nav/',
      title: 'Gastos',
    }
  ];

  public isAuthenticated() {
    return true;
    //return this.authService.isAuthenticated();
  }

}
