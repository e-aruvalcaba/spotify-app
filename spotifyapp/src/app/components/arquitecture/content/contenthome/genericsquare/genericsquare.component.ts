import { Component, Input, input } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { square } from './../../../../../models/square.interface';
@Component({
  selector: 'app-genericsquare',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './genericsquare.component.html',
  styleUrl: './genericsquare.component.css'
})
export class GenericsquareComponent {

  @Input() title = "";

  //DATOS DUMMY PARA GENERIC SQUARES

  items: square[] = [{
    id: 1,
    img: "assets/mix1.png",
    title: "Mix de canciones 1",
    desc: "Mago de Oz, Patricia Tapia y Manuel Seoane"
  }
    , {
    id: 2,
    img: "assets/mix2.png",
    title: "Mix de canciones 2",
    desc: "Peso pluma, Natanael Cano y Gabito ballesteros"
  }, {
    id: 3,
    img: "assets/mix3.png",
    title: "Mix de canciones 3",
    desc: "Rata Blanca, Stravaganzza, Tete Novoa"
  }, {
    id: 4,
    img: "assets/mix4.png",
    title: "Mix de canciones 4",
    desc: "Perfil Marrano, La Sonora Demente, La Sonora Colegial"
  }, {
    id: 5,
    img: "assets/mix5.png",
    title: "Mix especial de navidad",
    desc: "Tatiana, Te Cepillo el tin"
  }];
}
