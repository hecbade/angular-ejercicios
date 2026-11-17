import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {
  equiposa: string[] = ['Real_Madrid', 'Barsa', 'Atletico_Madrid', 'Sevilla', 'Valencia'];

  equipopadre: string = '';

  indicePadre: number = 0;
  indiceHijo: number = 0;

  comparar(equiposHijo: string[]) {

    let equipoPadre = this.equiposa[this.indicePadre];
    let equipoHijo = equiposHijo[this.indiceHijo];

    if (equipoPadre === equipoHijo) {
      console.log('Son iguales');
    } else {
      console.log('Son distintos');
    }
    this.indiceHijo++;

    if (this.indiceHijo === equiposHijo.length) {
      this.indiceHijo = 0;
      this.indicePadre++;
    }

    if (this.indicePadre >= this.equiposa.length) {
      console.log('Se han comparado todos los equipos');
      return;
    }
  }
}
