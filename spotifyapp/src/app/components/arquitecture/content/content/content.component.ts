import { Component } from '@angular/core';
import { HomesearchComponent } from '../content_utils/search/homesearch/homesearch.component';
import { RecentsearchComponent } from '../content_utils/search/recentsearch/recentsearch.component';
import { ExplorarComponent } from '../content_utils/search/explorar/explorar.component';
import { HomeComponent } from '../contenthome/home/home.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HomesearchComponent, RecentsearchComponent, ExplorarComponent, HomeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {


  busqueda = "";

}
