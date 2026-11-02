import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-izquierda',
  styleUrl: './izquierda.css',
  templateUrl: './izquierda.html',
})
export class Izquierda {

@Output() palabraAgregada: EventEmitter<string> = new EventEmitter<string>();

palabra: string = "";
palabras: string[] = [];

agregarPalabra() {
  if (this.palabra.trim() !== '') {
    this.palabras.push(this.palabra);
    this.palabra = '';
  }
  this.palabraAgregada.emit(this.palabras.join(', '));
}

}
