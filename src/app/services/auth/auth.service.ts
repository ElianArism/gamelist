import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 
  login(user: string, password: string): boolean {

    if(user === 'user' && password === 'password') {
      localStorage.setItem('usuario', user); 
      return true; 
    } else { 
      return false; 
    }
  }
   
  logout() { 
    localStorage.removeItem('usuario'); 
  }

  getUser(): any { 
    return localStorage.getItem('usuario'); 
  }

  isLoggedIn() {
    return (localStorage.getItem('usuario') !== null) ? true : false; 
  }
}
