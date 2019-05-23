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
      title: 'Dashboard',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'category',
      route: 'nav/',
      title: 'Categorias',
    }, {
      icon: 'attach_money',
      route: 'nav/',
      title: 'Renda',
    }, {
      icon: 'money_off',
      route: 'nav/',
      title: 'Gastos',
    }
  ];

  public isAuthenticated() {
    return true;
    //return this.authService.isAuthenticated();
  }

}
