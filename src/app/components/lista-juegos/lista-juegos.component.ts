import { Component, EventEmitter, Inject, InjectionToken, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.module';
import { Juego } from '../../models/juego.model';
import { JuegoApiService } from '../../services/juego/juego-api.service';
import { ApiJuegosPrincipalesVIEJOService } from '../../services/api-juegos-principales-viejo.service';
import { ApiJuegosPrincipalesService } from '../../services/api-juegos-principales.service';
import { ApiJuegosActualService } from '../../services/api-juegos2.0.service';
import { Critico } from '../../models/criticosJuegos.model';


const critico_principal: Critico = { puntuador: 'Eurogamer.es'}; 
const critico_actual = new InjectionToken<Critico>('critica.op');

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css'],
  providers: [
    {provide: critico_actual, useValue: critico_principal},
    ApiJuegosPrincipalesService, 
    JuegoApiService, 
  ],
})
export class ListaJuegosComponent implements OnInit {
  @Output() onJuegoAdded: EventEmitter<Juego>; 
  public actualizarJuegosFavoritos: string[]; 
  // var para iterar sobre todos los juegos 
  public todosLosJuegos; 
  constructor(public juegosAPI: JuegoApiService, private store: Store<appState>, @Inject(critico_actual) public criticos, private serverStaticGames: ApiJuegosPrincipalesService) { 
    this.onJuegoAdded = new EventEmitter(); 
    this.actualizarJuegosFavoritos = []; 
    this.store.select(state => state.juegos.juegoFavorito)
    .subscribe(juego => {
      if(juego !== null) {
        this.actualizarJuegosFavoritos.push(`Se eligio ${juego.nombre} como favorito`); 
      } 
    });
    this.store.select(state => state.juegos.listaJuegos).subscribe(listaJuegos => this.todosLosJuegos = listaJuegos);
  }

  ngOnInit(): void {
  }

  agregarNuevoJuego(juego: Juego): void { 
    this.juegosAPI.add(juego); 
    // this.onJuegoAdded.emit(juego); 
  }

  juegoElegido(juego: Juego): void {
    this.juegosAPI.escogerComoFavorito(juego);
  }

  mostrarEstaticos() {
    const data = this.serverStaticGames.getGames(); 
    data.forEach(juego => juego.dadaPor = this.criticos.puntuador); 
    return data;
  }
}
