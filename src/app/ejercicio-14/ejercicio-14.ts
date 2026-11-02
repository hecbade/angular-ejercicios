import { Component } from '@angular/core';
import { Izquierda } from './izquierda/izquierda';
import { Derecha } from './derecha/derecha';

@Component({
  imports: [Izquierda, Derecha],
  selector: 'app-ejercicio-14',
  styleUrl: './ejercicio-14.css',
  templateUrl: './ejercicio-14.html',
})
export class Ejercicio14 {

  nombre: string = "";

  recibirPalabras(palabras: string) {
    this.nombre = palabras;
  }
}
