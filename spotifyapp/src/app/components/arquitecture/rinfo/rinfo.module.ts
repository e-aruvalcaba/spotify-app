import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SonginfoComponent } from './songinfo/songinfo.component';
import { ListareproduccionComponent } from './listareproduccion/listareproduccion.component';
import { GirainfoComponent } from './girainfo/girainfo.component';
import { CreditinfoComponent } from './creditinfo/creditinfo.component';
import { ArtistinfoComponent } from './artistinfo/artistinfo.component';
import { RinfoComponent } from './rinfo.component';
import { GirarecordComponent } from './girainfo/girarecord/girarecord.component';



@NgModule({
  declarations: [    
    RinfoComponent,
    ArtistinfoComponent, 
    CreditinfoComponent, 
    GirarecordComponent,
    GirainfoComponent, 
    ListareproduccionComponent, 
    SonginfoComponent],
  imports: [
    CommonModule,
    DatePipe,
  ],exports:[
    RinfoComponent,
    ArtistinfoComponent, 
    CreditinfoComponent, 
    GirainfoComponent, 
    GirarecordComponent,
    ListareproduccionComponent, 
    SonginfoComponent
  ]
})
export class RinfoModule { }
