import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax'; 
import { Juego } from '../../models/juego.model'; 
@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {
  @Output() onJuegoAdded: EventEmitter<Juego>; 
  public juegosBuscados: string[]; 
  public fg: FormGroup; 
  public long: number = 5; 
  constructor(formBuilder: FormBuilder) {
    this.juegosBuscados = []
    this.onJuegoAdded = new EventEmitter(); 
    this.fg = formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, this.validarMinLong(this.long)])], 
      desc: [''], 
      img: ['']
    }); 

  }

  ngOnInit(): void {
    let etqInput = <HTMLInputElement>document.getElementById('nombre'); 
    fromEvent(etqInput, 'input')
    .pipe(
      map((evt: KeyboardEvent) => (evt.target as HTMLInputElement).value),
      filter((text) => text.length > 0),
      debounceTime(200),  
      distinctUntilChanged(), 
      switchMap(() => ajax('/assets/data.json')),  
    ).subscribe(ajaxResponse => {
      if ( ajaxResponse.response.includes(this.fg.value.nombre) ) { 
        this.juegosBuscados = ajaxResponse.response; 
        console.log(this.juegosBuscados);
      } else { 
        this.juegosBuscados = [];
      }
      
    }); 
  }   

  guardar(nombre: string, desc: string, img: string): boolean {
    const nuevoJuego = new Juego(nombre, desc, img); 
    this.onJuegoAdded.emit(nuevoJuego); 
    return false; 
  }


  validarMinLong(minLong: number): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const longCampo = control.value.toString().trim().length; 
      if(longCampo > 0 && longCampo < minLong) { 
        return { nombreMinLong: true }; 
      } 
      return null; 
    }
  }
}
