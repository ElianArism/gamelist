import { Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.module';
import { Juego } from '../../models/juego.model';
import { VotarNegativoJuegoAction, VotarPositivoJuegoAction } from '../../ngrx/juego.action';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  @Input() juego: Juego; 
  @Input('index') posicion: number;  
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clickeado: EventEmitter<Juego>;
  constructor(private store: Store<appState>) {
    this.clickeado = new EventEmitter(); 
   }

  ngOnInit(): void {
  }
  
  ir() {
    this.clickeado.emit(this.juego); 
    return false; 
  }

  // dispatch = ejecutar acciones
  voteUp() {
    this.store.dispatch( new VotarPositivoJuegoAction(this.juego)); 
    return false; 
  }

  voteDown() {
    this.store.dispatch( new VotarNegativoJuegoAction(this.juego));
    return false; 
  }
}
