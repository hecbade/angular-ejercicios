import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {
  @Input() equiporecibido:string[] =[];

  equiposb: string[] = ["Sevilla", "Real_Madrid"]


}
