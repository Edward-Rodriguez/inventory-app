import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: ` <img class='product-image' [src]='product.imageUrl'>`,
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {}

  ngOnInit(): void {}
}
