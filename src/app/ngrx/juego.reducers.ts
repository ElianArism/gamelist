import * as fromJuego from './juego.action';
import { Juego } from '../models/juego.model'; 
import { Action } from '@ngrx/store';
import { JuegoState } from './juego.state-model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// REDUCERS dado una accion o un estado generan un nuevo estado sin mutar o mutado 
export function reducerJuego( state: JuegoState, action: fromJuego.JuegosActions ): JuegoState { // estado, acciones 
    switch(action.type) {
        case fromJuego.JuegoActionTypes.INICIALIZAR_DATA: {
            const listaJuegos: string[] = (action as fromJuego.InicializarAction).listaJuegos; 
            console.log('hola'+listaJuegos);
            return {
                ...state, 
                listaJuegos: listaJuegos.map((juego) => new Juego(juego, '', ''))
            }
        }
        case fromJuego.JuegoActionTypes.NUEVO_JUEGO: {
            return {
                ...state, 
                listaJuegos:  [...state.listaJuegos, (action as fromJuego.NuevoJuegoAction).juego_payload]        
            }       
        }
        case fromJuego.JuegoActionTypes.JUEGO_FAVORITO: {
            state.listaJuegos.forEach((juego) => juego.setesFavorito(false)); 
            const nuevoFavorito = (action as fromJuego.JuegoFavoritoAction).juego_payload;
            nuevoFavorito.setesFavorito(true);  
            return { 
                juegoFavorito: nuevoFavorito,
                ...state
            } 
        }
        case fromJuego.JuegoActionTypes.VOTE_UP: {
            const juego: Juego = (action as fromJuego.VotarPositivoJuegoAction).juego_payload; 
            juego.voteUp(); 
            return { ...state }; 
            
        }
        case fromJuego.JuegoActionTypes.VOTE_DOWN: {
            const juego: Juego = (action as fromJuego.VotarNegativoJuegoAction).juego_payload; 
            juego.voteDown(); 
            return { ...state }; 
        }
        default: {
            return state; 
        }
    }
}


// EFFECTS dispara una accion en funcion de otra funcion  y se ejecutan luego de que se ejecuten los reducers 

// marca como preferido un juego 
@Injectable()
export class JuegoEffects {
    @Effect() 
    // subscribirse a cuando se agregue un nuevo juego
    nuevoAgregado$: Observable<Action> = this.actions$.pipe(
        ofType(fromJuego.JuegoActionTypes.NUEVO_JUEGO), 
        map((action: fromJuego.NuevoJuegoAction) => new fromJuego.JuegoFavoritoAction(action.juego_payload))
    )
    constructor(private actions$: Actions) {}
}