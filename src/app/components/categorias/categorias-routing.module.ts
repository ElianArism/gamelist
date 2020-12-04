import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasFamiliaresComponent } from './categorias-familiares/categorias-familiares.component';
import { CategoriasMainComponent } from './categorias-main/categorias-main.component';
import { CategoriasMayor18Component } from './categorias-mayor18/categorias-mayor18.component';

// components 

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'main', 
        pathMatch: 'full'
    },
    {
        path: 'main', 
        component: CategoriasMainComponent
    }, 
    {
        path: 'mayores18', 
        component: CategoriasMayor18Component
    },
    {
        path: 'familiares', 
        component:CategoriasFamiliaresComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }