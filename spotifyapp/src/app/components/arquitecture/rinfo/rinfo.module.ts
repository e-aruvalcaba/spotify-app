import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonginfoComponent } from './songinfo/songinfo.component';
import { ListareproduccionComponent } from './listareproduccion/listareproduccion.component';
import { GirainfoComponent } from './girainfo/girainfo.component';
import { CreditinfoComponent } from './creditinfo/creditinfo.component';
import { ArtistinfoComponent } from './artistinfo/artistinfo.component';
import { RinfoComponent } from './rinfo.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RinfoComponent,
    ArtistinfoComponent, 
    CreditinfoComponent, 
    GirainfoComponent, 
    ListareproduccionComponent, 
    SonginfoComponent
  ],exports:[
    RinfoComponent
  ]
})
export class RinfoModule { }
