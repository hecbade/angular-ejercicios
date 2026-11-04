import { Component } from '@angular/core';
import { Hijo18 } from '../hijo18/hijo18';
@Component({
  imports: [Hijo18],
  selector: 'app-padre18',
  styleUrl: './padre18.css',
  templateUrl: './18padre.component.html',
})
export class Padre18 {
  elemento: string = '';

  realizaComunicacionHijo(elemento: string) {
    this.elemento = elemento;
  }
}
