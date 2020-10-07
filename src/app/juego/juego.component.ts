import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Juego } from '../models/juego.model';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  @Input() juego: Juego; 
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
