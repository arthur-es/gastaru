import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	name : string;
  hide : Boolean;
  public ownerForm: FormGroup;

  constructor() {
  	this.name = 'Angular';
  	this.hide = true;
  	this.ownerForm = new FormGroup({
<<<<<<< HEAD
	    email: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.email]),
	    senha: new FormControl('', [Validators.required, Validators.maxLength(15)])
=======
	    email: new FormControl('', [Validators.required, Validators.max(15), Validators.email]),
	    senha: new FormControl('', [Validators.required, Validators.max(15)])
>>>>>>> incluindo tela de login, nav-side e nav-top bar ao projeto
	  })
  }

  ngOnInit() {
  }

  public logaNoSistema = () => {
    if (this.ownerForm.valid) {
      this.verificaLoginNoBD();
    }
  }

  public verificaLoginNoBD = () => {
    //Faz requisição ao servidor

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

}

