import { Juego } from '../models/juego.model';

export interface JuegoState { 
    listaJuegos: Juego[]; 
    juegoFavorito: Juego;  
}

export function InitalizeJuegoState() {
    return {
        listaJuegos: [], 
        juegoFavorito: null  
    }
}

