import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  name: string;
  hide: boolean;
  public ownerForm: FormGroup;

  constructor(private userService : UserService, private router: Router, private snackBar: MatSnackBar) {
    this.name = 'Angular';
    this.hide = true;
    this.ownerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });
  }

  ngOnInit() {
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public cadastrarUsuario = () => {
    if (this.ownerForm.valid) {
      this.userService.registerNewUser(this.ownerForm.value).subscribe(
        response => {
          this.openSnackBar('Usuário cadastrado com sucesso', 'Fechar');
          this.router.navigate(['/']);
          //alert('Usuário ' + this.ownerForm.value.username + ' cadastrado no sistema!')
        },
        error => {
          this.openSnackBar('Não foi possível criar uma conta com os dados informados', 'Fechar');
        }
      );
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
}
