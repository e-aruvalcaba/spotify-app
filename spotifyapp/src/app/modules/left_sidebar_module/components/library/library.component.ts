import { Component } from '@angular/core';
import { label } from './../../../../models/label.interface'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

labels:label[] = [{
  id:1,
  text: "Podcasts"
},{
  id:2,
  text: "Música"
},{
  id:3,
  text: "Albumes"
},{
  id:4,
  text: "Artistas"
},{
  id:5,
  text: "Heavy"
},{
  id:6,
  text: "Folk Metal"
},{
  id:7,
  text: "Celtic Music"
},{
  id:8,
  text: "Corridos Tumbados"
},{
  id:9,
  text: "Beliconas"
},];

}
