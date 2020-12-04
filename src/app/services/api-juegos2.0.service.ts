import { Injectable } from '@angular/core';
import { ApiJuegosPrincipalesService } from './api-juegos-principales.service';

@Injectable({
  providedIn: 'root'
})

export class ApiJuegosActualService extends ApiJuegosPrincipalesService{
  constructor() {
    super(); 
  }
  
  getGames(): any {
    const data = super.getGames(); 
    return data; 
  }
}
