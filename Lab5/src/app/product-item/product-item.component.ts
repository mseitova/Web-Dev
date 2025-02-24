import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() remove = new EventEmitter();
  liked: boolean = false;
  constructor() {
    this.product = new Product(0, '', 0, '', 0, '', '');
  }
  share(productLink: string) {
    const shareMessage = `Check out: ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  sharetg(productLink: string) {
    const shareMessage = `Check out this product:  ${productLink}`;
    const tgLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = tgLink;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
  likeProduct() {
    if (this.liked) {
      this.product.likes -= 1;
    } else {
      this.product.likes += 1;
    }
    this.liked = !(this.liked);
  }
}