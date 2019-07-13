import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import {RegisterComponent} from './pages/register/register.component';
import {ProfileComponent} from "./pages/profile/profile.component";


const routes: Routes = [
	{ 
		path: '',
		component: LoginComponent
	},
  {
    path: 'register',
    component: RegisterComponent
  },
	{
		path: 'nav',
		component: NavSideBarComponent,
		children : [
		{ 
			path: '',
			component: PagesComponent
		},
    {
      path: 'profile',
      component: ProfileComponent
    }]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
