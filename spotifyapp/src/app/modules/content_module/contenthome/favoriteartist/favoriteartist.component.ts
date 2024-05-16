import { Component, Input } from '@angular/core';
import { square } from './../../../../models/square.interface';

@Component({
  selector: 'app-favoriteartist',
  // standalone: true,
  // imports: [],
  templateUrl: './favoriteartist.component.html',
  styleUrl: './favoriteartist.component.css'
})
export class FavoriteartistComponent {

  @Input() item?:square;

}
