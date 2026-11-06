import { Component } from '@angular/core';
import { Interno } from './interno/interno';
import { Externo } from './externo/externo';

@Component({
  imports: [Interno, Externo],
  selector: 'app-ejercicio-20',
  styleUrl: './ejercicio-20.css',
  templateUrl: './ejercicio-20.html',
})
export class Ejercicio20 {
}
