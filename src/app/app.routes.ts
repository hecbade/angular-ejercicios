import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { EJERCICIOS } from './ejercicios';

export const routes: Routes = [
  { path: '', component: Inicio, pathMatch: 'full' },
  ...EJERCICIOS.map((e) => ({ path: e.ruta, loadComponent: e.cargar })),
  { path: '**', redirectTo: '' },
];
