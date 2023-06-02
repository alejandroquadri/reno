import { Component } from '@angular/core';
import { PRICES_COPY } from '../../shared/copy';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  copy = PRICES_COPY;
}
