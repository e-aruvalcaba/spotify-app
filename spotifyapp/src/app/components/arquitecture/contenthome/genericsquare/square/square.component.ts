import { Component, Input } from '@angular/core';
import { square } from '../../../../../models/square.interface';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

@Input() item?:square;

  constructor(){
  }



}
