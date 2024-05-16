import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './playerComponents/info/info.component';
import { PlayerComponent } from './playerComponents/player/player.component';
import { UtileriaComponent } from './playerComponents/utileria/utileria.component';
import { PlayerbarComponent } from './playerComponents/playerbar/playerbar.component';



@NgModule({
  declarations: [InfoComponent,
    PlayerComponent,
    UtileriaComponent,
    PlayerbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[InfoComponent,
    PlayerComponent,
    UtileriaComponent,
    PlayerbarComponent]
})
export class PlayerModule { }
