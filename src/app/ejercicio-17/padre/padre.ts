import { Component} from '@angular/core';
import { Hijo } from '../hijo/hijo';
@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './17padre.component.html',
})
export class Padre {
  datoComunicar: string = '';

  realizarComunicacion(nombre: string) {
    this.datoComunicar = nombre;
  }
}
