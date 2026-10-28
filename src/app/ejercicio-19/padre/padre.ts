import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

ArrayNombres: string[] = [
  'Producto_1',
  'Producto_2',
  'Producto_3',
  'Producto_4',
  'Producto_5',
  'Producto_6',
  'Producto_7',
  'Producto_8',
  'Producto_9'
];

ArrayStock: number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10];

ArrayPrecios: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  carrito(pos:number) : void {
  
  }

}
