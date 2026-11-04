import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo18',
  styleUrl: './hijo18.css',
  templateUrl: './18hijo.component.html',
})
export class Hijo18 {
  @Output() eventoComunicar = new EventEmitter<string>();
  elemento: string = '';

  realizarComunicacion(elemento: string) {
    this.eventoComunicar.emit(elemento);
  }
}
