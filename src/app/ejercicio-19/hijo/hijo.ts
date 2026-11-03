import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {
  @Input() nombreproducto: string = '';

  ArrayNombres: string[] = [''];

  ngOnChanges(){
    if (this.nombreproducto != '') {
      this.ArrayNombres.push(this.nombreproducto);
    }
  }
}
