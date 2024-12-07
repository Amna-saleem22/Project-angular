import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('fixedImage') fixedImage!: ElementRef;
  @ViewChild('elemList') elemList!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
   
    if (this.fixedImage && this.elemList) {
      const elems = this.elemList.nativeElement.querySelectorAll('.elem');

      
      this.renderer.listen(this.elemList.nativeElement, 'mouseenter', () => {
        this.renderer.setStyle(this.fixedImage.nativeElement, 'display', 'block');
      });

      this.renderer.listen(this.elemList.nativeElement, 'mouseleave', () => {
        this.renderer.setStyle(this.fixedImage.nativeElement, 'display', 'none');
      });

    
      elems.forEach((elem: HTMLElement) => {
        this.renderer.listen(elem, 'mouseenter', () => {
          const image = elem.getAttribute('data-image');
          if (image) {
            this.renderer.setStyle(this.fixedImage.nativeElement, 'backgroundImage', `url(${image})`);
          }
        });
      });
    }
  }
}
