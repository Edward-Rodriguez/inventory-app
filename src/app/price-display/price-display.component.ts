import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;

  ngOnInit(): void {}
}
