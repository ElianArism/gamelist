import { forwardRef, Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.module';
import { Juego } from '../../models/juego.model';
import { JuegoFavoritoAction, NuevoJuegoAction } from '../../ngrx/juego.action';
// http 
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { appConfig, APP_CONFIG, APP_CONFIG_VALUE } from 'src/app/models/apiConfig';
@Injectable({
  providedIn: 'root', 
})
export class JuegoApiService {
  public juegos: Juego[] = []; 
  constructor(
    private store: Store<appState>,
    @Inject(forwardRef(() => APP_CONFIG)) public config: appConfig, 
    private http: HttpClient
    ) {
      // subscribiendose a una porcion del store 
      this.store
        .select('juegos')
        .subscribe((data) => {
          console.log('Juegos sub store');
          console.log(data);
          this.juegos = data.listaJuegos; 
        }); 
        // trayendo datos de todo el store
        this.store
          .subscribe((data) => {
            console.log('all store');
            console.log(data)
          }); 
    }

  
  add(juego: Juego): void {
    // creando headers de la peticion 
    const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-security'});
    
    // nueva request 
    const req = new HttpRequest('POST', `${this.config.endPoint}/myFavorites`, {nuevoJuego: juego}, {headers}) //se le pasa al metodo (tipo de peticion, url, ``opcional`` datos, headers)
    this.store.dispatch(new NuevoJuegoAction(juego)); 

    // subscribiendose a los datos que devuelve la peticion 
    this.http.request(req).subscribe((nuevoJuego: HttpResponse<{}>) => {
      // si el status es 200 signfica que el juego se almaceno correctamente por ende tambien puede almacenarse en el storage
      if(nuevoJuego.status === 200) {
        console.log(nuevoJuego);
        this.store.dispatch(new NuevoJuegoAction(juego));
      }
    }); 
  }
  
  getById(id: string): Juego {
    return this.juegos.filter((juego) => juego.id.toString() === id)[0]; 
  }
  getAll(): Juego[] {
    return this.juegos; 
  }
  escogerComoFavorito(juego): void { 
    this.store.dispatch(new JuegoFavoritoAction(juego)); 
  }

}
