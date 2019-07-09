import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  hide: boolean;
  public ownerForm: FormGroup;

  constructor() {
    this.name = 'Angular';
    this.hide = true;
    this.ownerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });
  }

  ngOnInit() {
  }

  public cadastrarUsuario = () => {
    if (this.ownerForm.valid) {
      this.cadastrarUsuarioNoBD();
    }
  }

  public cadastrarUsuarioNoBD = () => {
    // Faz requisição ao servidor
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
}
