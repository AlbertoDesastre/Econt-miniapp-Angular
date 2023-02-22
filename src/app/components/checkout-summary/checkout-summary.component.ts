import { Component } from '@angular/core';
import { arrayOfCities } from 'src/app/assets/fakeCities';
import { City } from 'src/app/models/city.model';

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
      checked: true,
    },
  ];

  toggleChecked = (event: MouseEvent) => {
    const inputId = (event.target as HTMLInputElement).id;
    const index = this.inputs.findIndex((input) => input.id === inputId);

    this.inputs[index].checked = !this.inputs[index].checked;
  };
}
