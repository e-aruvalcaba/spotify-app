import { Component } from '@angular/core';
import { FavoriteartistComponent } from '../favoriteartist/favoriteartist.component';
import { GenericsquareComponent } from '../genericsquare/genericsquare.component';
import { square } from './../../../../../models/square.interface';

@Component({
  selector: 'app-homeContent',
  // standalone: true,
  // imports: [FavoriteartistComponent, GenericsquareComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  publi = "assets/publicidad.png";

  title1="Creado para Adrian Ruvalcaba Garcia";
  title2="Escuchado recientemente";
  title3="Volver a escuchar";
  title4="Lo mejor de los artistas";
  title5="Sugerencias para hoy";

  // DATOS DUMMY PARA FAVORITE ARTIST
  favorite: square[] = [{
    id: 1,
    img: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    title: "Mägo de Oz",
    desc: "Artista"
  }, {
    id: 2,
    img: "https://i.scdn.co/image/ab67616d0000b27315583045b2fdb7d7bab10e81",
    title: "Peso Pluma",
    desc: "Artista"
  }, {
    id: 3,
    img: "https://i.scdn.co/image/ab67616d0000b2736ed37d3f7d7af64380e1fd00",
    title: "Bürdel King",
    desc: "Artista"
  }, {
    id: 4,
    img: "https://i.scdn.co/image/ab6761610000e5eb2ed29d6d48829666efc8f609",
    title: "Nightwish",
    desc: "Artista"
  }, {
    id: 5,
    img: "https://i.scdn.co/image/ab676161000051743c23c0b9ac403044c0196ef3",
    title: "Cepillin",
    desc: "Artista"
  }];
  
}
