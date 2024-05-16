import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './contenthome/home/home.component';
import { ExplorarComponent } from './contenthome/content_utils/search/explorar/explorar.component';
import { RecentsearchComponent } from './contenthome/content_utils/search/recentsearch/recentsearch.component';
import { HomesearchComponent } from './contenthome/content_utils/search/homesearch/homesearch.component';
import { FavoriteartistComponent } from './contenthome/favoriteartist/favoriteartist.component';
import { GenericsquareComponent } from './contenthome/genericsquare/genericsquare.component';
import { AlbumviewComponent } from './contenthome/content_utils/albumview/albumview.component';
import { LastescuchadoComponent } from './contenthome/lastescuchado/lastescuchado.component';
import { SquareComponent } from './contenthome/genericsquare/square/square.component';

import { square } from './../../models/square.interface'

@NgModule({
  declarations: [
    // square, 
    HomesearchComponent, 
    RecentsearchComponent, 
    ExplorarComponent, 
    FavoriteartistComponent,
    SquareComponent,
    GenericsquareComponent,
    AlbumviewComponent,
    ExplorarComponent,
    HomeComponent,
    RecentsearchComponent,
    LastescuchadoComponent,    
    ContentComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HomesearchComponent, 
    RecentsearchComponent, 
    ExplorarComponent, 
    HomeComponent,
    FavoriteartistComponent,
    SquareComponent,
    GenericsquareComponent,
    AlbumviewComponent,
    ExplorarComponent,
    RecentsearchComponent,
    LastescuchadoComponent,
    ContentComponent
  ]
})
export class ContentModule { }
