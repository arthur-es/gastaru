import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-nav-top-bar',
  templateUrl: './nav-top-bar.component.html',
  styleUrls: ['./nav-top-bar.component.css']
})
export class NavTopBarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router,private userServ : UserService) {}

  ngOnInit() {
  }

  public logout() {
    //this.authService.logout();
    this.userServ.setToken('');
    this.router.navigate(['/']);
  }

}
