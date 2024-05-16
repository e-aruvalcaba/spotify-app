import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { StartComponent } from './components/start/start.component';
import { LibraryComponent } from './components/library/library.component';

@NgModule({
  declarations: [
    StartComponent,
    SidebarComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LibraryComponent,
    SidebarComponent
  ]
})
export class LeftSidebarModule{ }
