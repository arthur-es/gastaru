import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

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

  constructor(private userService : UserService, private router: Router) {
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

  public cadastrarUsuario = () => {
    if (this.ownerForm.valid) {
      this.userService.registerNewUser(this.ownerForm.value).subscribe(
        response => {
          this.router.navigate(['/']);
          //alert('Usuário ' + this.ownerForm.value.username + ' cadastrado no sistema!')
          
        },
        error => console.log('error', error)
      );
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
}
