
import { Component, inject ,OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './pages/service/product.service';
import { FooterComponent } from "./footer/footer.component";
import { SliderComponent } from './slider/slider.component';
// import LocomotiveScroll from 'locomotive-scroll';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, RouterLink,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API';



// scroll:any
//implements  OnInit
//   ngOnInit() {
//     const scrollContainer = document.querySelector('[data-scroll-container]');
  
//     if (scrollContainer) {
//       this.scroll = new LocomotiveScroll({
//         el: scrollContainer,
//         smooth: true
//       });
//     } else {
//       console.warn('Scroll container not found!');
//     }
//   }
  










  productService = inject(ProductService);
  isCartVisiable: boolean = false;
  cartItems: any []= [];
  totalAmount: number = 0;
  constructor() {
    this.productService.onAddToCart$.subscribe((res:any)=> {
      debugger;
      this.cartItems.unshift(res);
      this.calculateAmount();
    })
  }

  showCart() {
    this.isCartVisiable = !this.isCartVisiable;
  }
  getDiscountedPrice(product: any) {
    const totalValue = product.price * ( (100-product.discount) / 100 )
    return totalValue.toFixed(0);
  }

  calculateAmount() {
    this.totalAmount = 0;
    this.cartItems.forEach(product => {
      this.totalAmount = this.totalAmount +  this.totalAmount  + (product.price * ( (100-product.discount) / 100 ))
    }); 
  }

  removeProduct(index:number) {
    this.cartItems.splice(index,1)
    this.calculateAmount();
  }





  
}
