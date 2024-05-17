import { Component, Input } from '@angular/core';
import { song } from '../../models/song.interface';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {

  @Input() item?:song;
  playing:boolean=false;
}
