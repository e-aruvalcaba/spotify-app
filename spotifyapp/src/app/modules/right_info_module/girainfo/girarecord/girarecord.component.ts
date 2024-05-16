import { Component, Input } from '@angular/core';
import { girarecord } from '../../../../models/girarecord.interface';

@Component({
  selector: 'app-girarecord',
  templateUrl: './girarecord.component.html',
  styleUrl: './girarecord.component.css'
})
export class GirarecordComponent {

  @Input() item?: girarecord;

  constructor() {
  }

}
