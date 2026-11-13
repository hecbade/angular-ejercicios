import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

  equiposa : string[] = ["Real_Madrid","Barsa","Atletico_Madrid","Sevilla","Valencia"]

  equipopadre : string = ""

comparar(elemento: string) {
    this.equipopadre = elemento;
}

}
