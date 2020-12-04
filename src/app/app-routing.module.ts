import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component'; 
import { JuegoDetalleComponent } from './components/juego-detalle/juego-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { JuegoParticularComponent } from './components/juego-particular/juego-particular.component';
import { routes as JuegosRoutes } from './components/categorias/categorias-routing.module'
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  {
    path: 'home', 
    component: ListaJuegosComponent
  },
  {
    path: 'detalle', 
    component: JuegoDetalleComponent
  },
  {
    path:'login', 
    component: LoginComponent
  }, 
  {
    path:'personal', 
    component: ProtectedComponent, 
    canActivate: [ UsuarioLogueadoGuard ] 
  }, 
  {
    path:'juego/:id', 
    component: JuegoParticularComponent
  }, 
  {
    path: 'categorias', 
    canActivate: [ UsuarioLogueadoGuard ], 
    children: JuegosRoutes
  }

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
