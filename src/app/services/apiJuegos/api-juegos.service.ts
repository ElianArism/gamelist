import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.module';
// http
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { InicializarAction } from 'src/app/ngrx/juego.action';
import { APP_CONFIG_VALUE } from 'src/app/models/apiConfig';
@Injectable({
  providedIn: 'root'
})
export class ApiJuegosService {
  //otra configuracion de la api de express  
  constructor(public store: Store<appState>, public http: HttpClient) { }

  // carga en el store los juegos favoritos, provenientes de una peticion get a la api 
  async initializeJuegoState(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-seguridad'});
    const req = new HttpRequest('GET', `${APP_CONFIG_VALUE.endPoint}/myFavorites`, {headers}); 
    const juegosRes: any = await this.http.request(req).toPromise(); 
    console.log('asdasdasd'+juegosRes.body.myFavorites);
    this.store.dispatch(new InicializarAction(juegosRes.body.myFavorites)); 
  }
}
