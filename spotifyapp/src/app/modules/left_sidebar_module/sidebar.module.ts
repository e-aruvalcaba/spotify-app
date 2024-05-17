import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { StartComponent } from './components/start/start.component';
import { LibraryComponent } from './components/library/library.component';
import { ScrollableComponent } from '../../components/scrollable/scrollable.component';
import { SongComponent } from '../../components/song/song.component';

@NgModule({
  declarations: [
    StartComponent,

    LibraryComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ScrollableComponent,
    SongComponent
  ],
  exports: [
    SidebarComponent,
    LibraryComponent,
    SidebarComponent
  ]
})
export class LeftSidebarModule{ }
