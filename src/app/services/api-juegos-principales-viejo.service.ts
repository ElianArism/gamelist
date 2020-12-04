import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiJuegosPrincipalesVIEJOService {

  constructor() { }

  getGames(): any {
    console.log('Juegos obtenidos');
  }
}
