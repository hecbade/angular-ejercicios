import { Component } from '@angular/core';
import { Padre } from './padre/padre';

@Component({
  imports: [Padre],
  selector: 'app-adicional',
  styleUrl: './adicional.css',
  templateUrl: './adicional.html',
})
export class Adicional {}
