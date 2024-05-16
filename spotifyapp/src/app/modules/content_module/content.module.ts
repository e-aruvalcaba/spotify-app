import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './contenthome/home/home.component';
import { ExplorarComponent } from './contenthome/content_utils/search/explorar/explorar.component';
import { RecentsearchComponent } from './contenthome/content_utils/search/recentsearch/recentsearch.component';
import { HomesearchComponent } from './contenthome/content_utils/search/homesearch/homesearch.component';
// import { FavoriteartistComponent } from './contenthome/favoriteartist/favoriteartist.component';
import { AlbumviewComponent } from './contenthome/content_utils/albumview/albumview.component';
import { LastescuchadoComponent } from './contenthome/lastescuchado/lastescuchado.component';
import { SquareComponent } from '../../components/square/square.component';
import { ScrollableComponent } from '../../components/scrollable/scrollable.component';

@NgModule({
  declarations: [
    HomesearchComponent, 
    RecentsearchComponent, 
    ExplorarComponent, 
    AlbumviewComponent,
    ExplorarComponent,
    HomeComponent,
    RecentsearchComponent,
    LastescuchadoComponent,    
    ContentComponent],
  imports: [
    CommonModule,
    ScrollableComponent
  ],
  exports:[
    HomesearchComponent, 
    RecentsearchComponent, 
    ExplorarComponent, 
    HomeComponent,
    AlbumviewComponent,
    ExplorarComponent,
    RecentsearchComponent,
    LastescuchadoComponent,
    ContentComponent
  ]
})
export class ContentModule { }
