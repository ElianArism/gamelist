import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { JuegoComponent } from './components/juego/juego.component';
import { FormJuegoComponent } from './components/form-juego/form-juego.component';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component';
import { JuegoDetalleComponent } from './components/juego-detalle/juego-detalle.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasMainComponent } from './components/categorias/categorias-main/categorias-main.component';
import { CategoriasMayor18Component } from './components/categorias/categorias-mayor18/categorias-mayor18.component';
import { CategoriasFamiliaresComponent } from './components/categorias/categorias-familiares/categorias-familiares.component';
import { JuegoParticularComponent } from './components/juego-particular/juego-particular.component';

// ngRx 
import { ActionReducerMap, StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { InitalizeJuegoState, JuegoState } from './ngrx/juego.state-model';
import { JuegoEffects, reducerJuego } from './ngrx/juego.reducers';

// Servicios 
import { JuegoApiService } from './services/juego/juego-api.service';
import { ApiJuegosService } from './services/apiJuegos/api-juegos.service';
import { APP_CONFIG, APP_CONFIG_VALUE } from './models/apiConfig';
import { HttpClientModule } from '@angular/common/http';




// Todos los estados se administran aca 
export interface appState {
  juegos: JuegoState
}

// reducer Global 
const reducers: ActionReducerMap<appState> = {
  juegos: reducerJuego
}

// inicializar state 
let reducersInitialState = {
  juegos: InitalizeJuegoState()
}

// app init (carga la config de la api de express)
export function init_app(appLoadService: ApiJuegosService): () => Promise<any> {
  return () => appLoadService.initializeJuegoState(); 
}

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    ListaJuegosComponent, 
    JuegoDetalleComponent, 
    FormJuegoComponent, 
    ProtectedComponent, 
    LoginComponent,
    CategoriasComponent,
    CategoriasMainComponent,
    CategoriasMayor18Component,
    CategoriasFamiliaresComponent,
    JuegoParticularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgRxStoreModule,
    // importaciones ngrx 
    NgRxStoreModule.forRoot(reducers, 
    {
      initialState: reducersInitialState,
      runtimeChecks: {
        strictStateImmutability: false, 
        strictActionImmutability: false
      } 
    }
    ), 
    EffectsModule.forRoot([JuegoEffects]), 
    StoreDevtoolsModule.instrument(), 
    HttpClientModule
    
  ],
  providers: [ JuegoApiService,
    {provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},
    ApiJuegosService, 
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [ApiJuegosService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
