import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msg: string;
  constructor(public authService: AuthService) {
    this.msg = ''; 
  }

  ngOnInit(): void {
  }

  login(user: string, password: string): boolean {
    if(this.authService.login(user, password)) {
      this.msg = "logueado Correctamente"; 
    } else {
      this.msg = "login incorrecto"; 
    }
    return false; 
  }

  logout(): boolean {
    this.authService.logout(); 
    return false;   
  }
}
