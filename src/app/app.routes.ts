import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RecetasComponent} from './components/recetas/recetas.component';
import {RecetaComponent} from './components/receta/receta.component';
/* 
import {BuscadorComponent} from './components/buscador/buscador.component'; */

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'receta/:id', component: RecetaComponent },
  /* 
  { path: 'buscador/:termino', component: BuscadorComponent },*/
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
