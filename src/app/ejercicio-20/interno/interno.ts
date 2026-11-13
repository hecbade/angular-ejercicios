import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-interno',
  styleUrl: './interno.css',
  templateUrl: './interno.html',
})
export class Interno {
@Input() color_recibido: string = '';
@Input() turno_recibido: boolean = false;

nuevoColorInterno:string='';
mostrarFormulario:boolean = true;

@Input() colorInterno:string = '';

@Output() cambiarColor = new EventEmitter<string>();

enviarcolor(){
  this.cambiarColor.emit(this.nuevoColorInterno)
  this.mostrarFormulario = false;
}





}
