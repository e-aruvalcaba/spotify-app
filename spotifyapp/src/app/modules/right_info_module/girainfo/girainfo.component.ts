import { Component } from '@angular/core';
import { girarecord } from '../../../models/girarecord.interface';
import { GirarecordComponent } from './girarecord/girarecord.component';

@Component({
  selector: 'app-girainfo',
  templateUrl: './girainfo.component.html',
  styleUrl: './girainfo.component.css'
})
export class GirainfoComponent {


  fechas?:girarecord[] = [{
    id: 1,
    date: new Date(2024, 4, 29),
    state: "Mexicali",
    artist: "Mägo de Oz",
    location: "CEART Mexicali",
    time: "21:30"
  },{
    id: 2,
    date: new Date(2024, 4, 31),
    state: "Tijuana",
    artist: "Mägo de Oz",
    location: "Audiorama el Trompo",
    time: "21:30"
  },{
    id: 3,
    date: new Date(2024, 5, 26),
    state: "Monterrey",
    artist: "Mägo de Oz",
    location: "Arena Monterrey",
    time: "20:00"
  },{
    id: 4,
    date: new Date(2024, 5, 27),
    state: "Torreon",
    artist: "Mägo de Oz",
    location: "Metropoli",
    time: "20:00"
  }];



}
