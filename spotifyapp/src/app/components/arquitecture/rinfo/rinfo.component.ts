import { Component } from '@angular/core';
import { ArtistinfoComponent } from './artistinfo/artistinfo.component';
import { CreditinfoComponent } from './creditinfo/creditinfo.component';
import { GirainfoComponent } from './girainfo/girainfo.component';
import { ListareproduccionComponent } from './listareproduccion/listareproduccion.component';
import { SonginfoComponent } from './songinfo/songinfo.component';

@Component({
  selector: 'app-rinfo',
  standalone: true,
  imports: [ArtistinfoComponent, CreditinfoComponent, GirainfoComponent, ListareproduccionComponent, SonginfoComponent],
  templateUrl: './rinfo.component.html',
  styleUrl: './rinfo.component.css'
})
export class RinfoComponent {

}
