import { Component, Input } from '@angular/core';
import { square } from './../../../../../models/square.interface';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

@Input() item?:square;

  constructor(){
  }



}
