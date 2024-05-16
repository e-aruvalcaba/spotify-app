import { Component } from '@angular/core';
import { SidebarComponent } from '../../modules/left_sidebar_module/sidebar.component';
import { ContentModule } from '../../modules/content_module/content.module';
import { RinfoModule } from '../../modules/right_info_module/rinfo.module';
import { InfoComponent } from '../../modules/player_module/playerComponents/info/info.component';
import { UtileriaComponent } from '../../modules/player_module/playerComponents/utileria/utileria.component';
import { PlayerComponent } from '../../modules/player_module/playerComponents/player/player.component';
import { PlayerModule } from '../../modules/player_module/player.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, ContentModule, RinfoModule, PlayerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
