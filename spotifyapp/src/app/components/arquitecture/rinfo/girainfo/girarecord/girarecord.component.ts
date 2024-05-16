import { Component, Input } from '@angular/core';
import { girarecord } from '../../../../../models/girarecord.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-girarecord',
  // standalone: true,
  // imports: [DatePipe],
  templateUrl: './girarecord.component.html',
  styleUrl: './girarecord.component.css'
})
export class GirarecordComponent {

  @Input() item?: girarecord;

  constructor() {

    // this.item = {
    //   id: 0,
    //   date: new Date(),
    //   artist: "",
    //   location: "",
    //   time: "",
    //   state: ""
    // };
  }

}
