import { Action } from '@ngrx/store';
import { Juego } from '../models/juego.model'; 
// enumerar Acciones 
export enum JuegoActionTypes {
    NUEVO_JUEGO = '[Juego] Nuevo', 
    JUEGO_FAVORITO = '[Juego] Favorito', 
    VOTE_UP = '[Juego] Vote Up', 
    VOTE_DOWN = '[Juego] Vote Down', 
    INICIALIZAR_DATA = '[Juego] Inicializar'
}

export class NuevoJuegoAction implements Action {
    readonly type = JuegoActionTypes.NUEVO_JUEGO; 
    constructor(public juego_payload: Juego) {}
}

export class JuegoFavoritoAction implements Action { 
    readonly type = JuegoActionTypes.JUEGO_FAVORITO; 
    constructor(public juego_payload: Juego) {}
}

export class VotarPositivoJuegoAction implements Action { 
    type = JuegoActionTypes.VOTE_UP; 
    constructor(public juego_payload: Juego) {}
}

export class VotarNegativoJuegoAction implements Action { 
    type = JuegoActionTypes.VOTE_DOWN;  
    constructor(public juego_payload: Juego) {}
}

export class InicializarAction implements Action { 
    readonly type = JuegoActionTypes.INICIALIZAR_DATA; 
    constructor(public listaJuegos: string[]) {
        
    }
}

// union de todos los tipos 
export type JuegosActions = NuevoJuegoAction | JuegoFavoritoAction | VotarPositivoJuegoAction | VotarNegativoJuegoAction | InicializarAction; 
 