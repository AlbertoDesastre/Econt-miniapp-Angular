import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss'],
})
export class CheckoutSummaryComponent {
  inputs = [
    {
      id: 'same-invoice',
      type: 'radio',
      text: 'Use the same data for the invoice',
      checked: true,
    },
    {
      id: 'different-invoice',
      type: 'radio',
      text: 'Use different invoice details',
      checked: false,
    },
    {
      id: 'econt-invoice',
      type: 'radio',
      text: 'Pick my purchase on an Econt office',
      checked: false,
    },
  ];
}
