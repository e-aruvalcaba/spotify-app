import { Component } from '@angular/core';
import { SidebarComponent } from '../arquitecture/sidebar/sidebar.component';
import { ContentComponent } from '../arquitecture/content/content.component';
import { RinfoComponent } from '../arquitecture/rinfo/rinfo.component';
import { PlayerComponent } from '../arquitecture/player/player.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, ContentComponent, RinfoComponent, PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
