import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogueadoGuard implements CanActivate {
  puedeMostrarse;
  constructor (private authService: AuthService) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    this.puedeMostrarse = this.authService.isLoggedIn(); 
    (this.puedeMostrarse) ? console.log('Esta logueado, el contenido protegido puede mostrarse') : console.log('No puede mostrarse');;
    return this.puedeMostrarse; 
  }

}
