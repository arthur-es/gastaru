import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';


const routes: Routes = [
	{ 
		path: '',
		component: LoginComponent 
	},
	{
		path: 'nav',
		component: NavSideBarComponent,
		children : [
		{ 
			path: '',
			component: PagesComponent
		}]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
