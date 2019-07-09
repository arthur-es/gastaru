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
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material.module';
import { CategoriaService } from './categoria.service';
import { ModalComponent } from './pages/main/modal/modal.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';

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
    ModalComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [ModalComponent],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
