import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryFormComponent } from './pages/main/entry-form/entry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { MainComponent } from './pages/main/main.component';
import { MoneyStatusComponent } from './pages/main/money-status/money-status.component';
import { LancamentoComponent } from './pages/main/lancamento/lancamento.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { NavTopBarComponent } from './nav-top-bar/nav-top-bar.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
<<<<<<< HEAD
import { CategoriaService } from './categoria.service';
import { ModalComponent } from './pages/main/modal/modal.component';
=======
>>>>>>> incluindo tela de login, nav-side e nav-top bar ao projeto

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    PagesComponent,
    MainComponent,
    MoneyStatusComponent,
    LancamentoComponent,
    NavSideBarComponent,
    NavTopBarComponent,
    LoginComponent,
<<<<<<< HEAD
    ModalComponent,
=======
>>>>>>> incluindo tela de login, nav-side e nav-top bar ao projeto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [ModalComponent],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
