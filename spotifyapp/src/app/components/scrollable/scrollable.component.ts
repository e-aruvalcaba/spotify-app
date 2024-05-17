import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { label } from './../../models/label.interface';
import { square } from '../../models/square.interface';
import { SquareComponent } from '../square/square.component';
@Component({
  selector: 'app-scrollable',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './scrollable.component.html',
  styleUrl: './scrollable.component.css'
})
export class ScrollableComponent {

  @Input() title: string="";
  @Input() tipo: number = 0;
  @Input() zeroItems: label[] = []; //for option 0 --- badges
  @Input() oneItems: square[] = []; //for option 1  --- circle scrolls
  @Input() twoItems: square[] = []; //for option 2  --- square scrolls

  ngOnInit(){
    setTimeout(() =>{
      this.checkScroll();
    }, 2)
  }
  
  @ViewChildren('listItem')
  public scrollable!: QueryList<ElementRef<HTMLLIElement>>

  @ViewChild('left') leftButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('right') rightButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('scroll') scrollImages!: ElementRef<HTMLDivElement>;

  checkScroll() {
    const scrollLength = this.scrollImages.nativeElement.scrollWidth - this.scrollImages.nativeElement.clientWidth;
    const currentScroll = this.scrollImages.nativeElement.scrollLeft;
    console.log("check scroll")
    if (currentScroll === 0) {
      this.leftButton.nativeElement.setAttribute("disabled", "true");
      this.rightButton.nativeElement.removeAttribute("disabled");
      this.leftButton.nativeElement.classList.add("hidden");
      this.rightButton.nativeElement.classList.remove("hidden");
    } else if (currentScroll === scrollLength) {
      this.rightButton.nativeElement.setAttribute("disabled", "true");
      this.leftButton.nativeElement.removeAttribute("disabled");
      this.rightButton.nativeElement.classList.add("hidden");
      this.leftButton.nativeElement.classList.remove("hidden");
    } else {
      this.leftButton.nativeElement.removeAttribute("disabled");
      this.rightButton.nativeElement.removeAttribute("disabled");
      this.rightButton.nativeElement.classList.remove("hidden");
      this.leftButton.nativeElement.classList.remove("hidden");
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

  // @HostListener('scrollImage:scroll', ['$event'])
  // onResize(event: any) {
  //   this.checkScroll();
  // }

  onScroll(event:any){
    console.log("on scroll")
    this.checkScroll();
  }

}
