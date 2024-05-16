import { Component } from '@angular/core';
import { HomeComponent } from './contenthome/home/home.component';
import { ExplorarComponent } from './contenthome/content_utils/search/explorar/explorar.component';
import { RecentsearchComponent } from './contenthome/content_utils/search/recentsearch/recentsearch.component';
import { HomesearchComponent } from './contenthome/content_utils/search/homesearch/homesearch.component';


@Component({
  selector: 'app-content',
  // standalone: true,
  // imports: [HomesearchComponent, RecentsearchComponent, ExplorarComponent, HomeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {


  busqueda = "";

}
