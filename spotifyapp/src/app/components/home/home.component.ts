import { Component } from '@angular/core';
import { SidebarComponent } from '../arquitecture/sidebar/sidebar.component';
import { RinfoComponent } from '../arquitecture/rinfo/rinfo.component';
import { InfoComponent } from '../arquitecture/player/playerComponents/info/info.component';
import { UtileriaComponent } from '../arquitecture/player/playerComponents/utileria/utileria.component';
import { PlayerComponent } from '../arquitecture/player/playerComponents/player/player.component';
import { RinfoModule } from '../arquitecture/rinfo/rinfo.module';
import { ContentComponent } from '../arquitecture/content/content.component';
import { ContentModule } from '../arquitecture/content/content.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, ContentModule, RinfoModule, InfoComponent, UtileriaComponent, PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
