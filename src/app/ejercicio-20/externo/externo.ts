import { Component, Input, Output } from '@angular/core';
import { Interno } from '../interno/interno';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Interno, FormsModule],
  selector: 'app-externo',
  styleUrl: './externo.css',
  templateUrl: './externo.html',
})
export class Externo {
  actual_ext: string = 'Green';
  actual_int: string = '';
//Variable que guarda el color que mete el usuario
  nuevo_color: string = '';
//Es la variable que dice si mostramos formulario o no
  turno: boolean = true;
  colorAnterior:string='';

cambiarColor(){
  //Metodo que va al boton de cambiar color
  this.colorAnterior = this.actual_ext
  this.actual_ext = this.nuevo_color
  this.actual_int = this.colorAnterior
  this.turno = false
}


  recibirColor(nuevoColor: string) {
    this.colorAnterior = this.actual_int
    this.actual_int = nuevoColor
    this.actual_ext = this.colorAnterior;
    this.turno = true
  }
}
