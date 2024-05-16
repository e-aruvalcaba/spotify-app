import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { label } from './../../models/label.interface';
import { square } from '../../models/square.interface';
@Component({
  selector: 'app-scrollable',
  standalone: true,
  imports: [],
  templateUrl: './scrollable.component.html',
  styleUrl: './scrollable.component.css'
})
export class ScrollableComponent {

  @Input() tipo: number = 0;
  @Input() zeroItems: label[] = []; //for option 0 --- badges
  @Input() oneItems: square[] = []; //for option 1  --- circle scrolls
  @Input() twoItems: label[] = []; //for option 2  --- square scrolls

  ngOnInit(){
    console.log(this.oneItems)
  }
  
  @ViewChildren('listItem')
  public scrollable!: QueryList<ElementRef<HTMLLIElement>>

  @ViewChild('left') leftButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('right') rightButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('scroll') scrollImages!: ElementRef<HTMLDivElement>;


  public ngAfterViewInit() {
    console.log(
      this.scrollable.find(itm =>
        itm.nativeElement.getAttribute('data-id') === 'my-element-id'
      )
    )
  }

  checkScroll() {
    const scrollLength = this.scrollImages.nativeElement.scrollWidth - this.scrollImages.nativeElement.clientWidth;
    const currentScroll = this.scrollImages.nativeElement.scrollLeft;
    if (currentScroll === 0) {
      this.leftButton.nativeElement.setAttribute("disabled", "true");
      this.rightButton.nativeElement.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      this.leftButton.nativeElement.setAttribute("disabled", "true");
      this.rightButton.nativeElement.removeAttribute("disabled");
    } else {
      this.leftButton.nativeElement.removeAttribute("disabled");
      this.rightButton.nativeElement.removeAttribute("disabled");
    }
  }

  leftScroll() {
    this.scrollImages.nativeElement.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  rightScroll() {
    this.scrollImages.nativeElement.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
  }

}
