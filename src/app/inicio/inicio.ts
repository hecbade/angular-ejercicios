import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EJERCICIOS } from '../ejercicios';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  ejercicios = EJERCICIOS;
}
