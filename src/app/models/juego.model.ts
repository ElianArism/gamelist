import { v4 as uuid } from 'uuid';
export class Juego {
    public id = uuid()
    public caracteristicas: string[]; 
    private esFavorito: boolean = false; 
    constructor(public nombre: string, public  desc:string, public  imgUrl:string, public votes:number = 0) {
        this.caracteristicas = ['+18', '2020', 'buena calificacion']; 
    }
    setesFavorito(fav: boolean): void { 
        this.esFavorito = fav; 
    }
    get Favorito(): boolean { 
        return this.esFavorito;
    } 

    voteUp(): any {
        this.votes++;
    }
    voteDown(): any {
        if(this.votes > 0) this.votes--;
    }
}