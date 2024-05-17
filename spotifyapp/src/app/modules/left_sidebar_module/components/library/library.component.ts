import { Component } from '@angular/core';
import { label } from './../../../../models/label.interface';
import { song } from './../../../../models/song.interface'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

  searchActive: boolean = false;
  items:song[] = [{
    id: 1,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  },{
    id: 2,
    title: "Al abordaje",
    albumImg: "https://i.scdn.co/image/ab67616d0000b273e85e8b8d8817faacbbe78bc1",
    artist: "Mägo de Oz",
    album: "Bandera Negra",
    durationString: "08:23",
    durationSeconds: 1077
  },{
    id: 3,
    title: "Gaia",
    albumImg: "https://i.scdn.co/image/ab67616d0000b273b637449c74ec8501ed2e03aa",
    artist: "Mägo de Oz",
    album: "Gaia",
    durationString: "11:03",
    durationSeconds: 1077
  },{
    id: 4,
    title: "El hijo del ayer",
    albumImg: "https://akamai.sscdn.co/uploadfile/letras/albuns/9/3/9/f/1740511681241661.jpg",
    artist: "Celtian",
    album: "Sendas de Leyenda",
    durationString: "04:19",
    durationSeconds: 1077
  },{
    id: 5,
    title: "El Quinto teletubbie",
    albumImg: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e6/68/80/e668806e-2342-609f-d06b-41cf2c84486d/8445162049962.jpg/1200x1200bb.jpg",
    artist: "Chabelos",
    album: "Seko!",
    durationString: "03:50",
    durationSeconds: 1077
  },{
    id: 6,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  },{
    id: 7,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  },{
    id: 8,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  },{
    id: 9,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  },{
    id: 10,
    title: "Ira Dei",
    albumImg: "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    artist: "Mägo de Oz",
    album: "Ira Dei",
    durationString: "17:57",
    durationSeconds: 1077
  }];

  labels: label[] = [{
    id: 1,
    text: "Podcasts"
  }, {
    id: 2,
    text: "Música"
  }, {
    id: 3,
    text: "Albumes"
  }, {
    id: 4,
    text: "Artistas"
  }, {
    id: 5,
    text: "Heavy"
  }, {
    id: 6,
    text: "Folk Metal"
  }, {
    id: 7,
    text: "Celtic Music"
  }, {
    id: 8,
    text: "Corridos Tumbados"
  }, {
    id: 9,
    text: "Beliconas"
  },];


  activeSearch(): boolean {
    this.searchActive = !this.searchActive;
    return this.searchActive;
  }

}
