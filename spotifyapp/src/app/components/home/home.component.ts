import { Component } from '@angular/core';
import { ContentModule } from '../../modules/content_module/content.module';
import { RinfoModule } from '../../modules/right_info_module/rinfo.module';
import { PlayerModule } from '../../modules/player_module/player.module';
import { LeftSidebarModule } from '../../modules/left_sidebar_module/sidebar.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftSidebarModule, ContentModule, RinfoModule, PlayerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
