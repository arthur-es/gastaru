import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  name: string;
  hide: boolean;
  public ownerForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
    this.name = 'Angular';
    this.hide = true;
    this.ownerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

  public logaNoSistema = () => {
    if (this.ownerForm.valid) {
      this.userService.loginUser(this.ownerForm.value).subscribe(
        response => {
          // console.log(response);
          this.userService.setToken(response.token);
          console.log(this.userService.getToken());
          // alert('Usuário ' + this.ownerForm.value.username + ' logado!')
          this.openSnackBar('Usuário Cadastrado com Sucesso', 'Fechar');
          this.router.navigate(['nav']);
        },
        error => {
          console.log('error', error);
          alert('Usuário ou senha inválidos!');
        }
      );
    }
  }

  public verificaLoginNoBD = () => {
    // Faz requisição ao servidor

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

}

