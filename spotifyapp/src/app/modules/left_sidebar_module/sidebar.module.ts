import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { StartComponent } from './components/start/start.component';
import { LibraryComponent } from './components/library/library.component';
import { ScrollableComponent } from '../../components/scrollable/scrollable.component';

@NgModule({
  declarations: [
    StartComponent,

    LibraryComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ScrollableComponent
  ],
  exports: [
    SidebarComponent,
    LibraryComponent,
    SidebarComponent
  ]
})
export class LeftSidebarModule{ }
