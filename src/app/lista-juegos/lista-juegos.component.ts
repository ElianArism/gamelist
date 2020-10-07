import { Component, OnInit } from '@angular/core';
import { Juego } from '../models/juego.model';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {
  listJuegos: Juego[] = [new Juego('Fifa', 'Deportes, futbol.', 'data:image/jpeg;base64,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'), 
  new Juego('Dark Souls', 'RPG, accion.', 'data:image/jpeg;base64,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')
]; 
  constructor() { }

  ngOnInit(): void {
  }
  agregar(nombre:string, desc:string, img:string): boolean { 
    this.listJuegos = [...this.listJuegos, new Juego(nombre, desc, img)];
    return false; 
  }

}
