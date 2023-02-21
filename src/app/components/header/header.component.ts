import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  buttons: string[] = [
    'SHOPPING CARD',
    'TRANSPORTATION AND DELIVERY',
    'CONFIRMATION',
    'METHOD OF PAYMENT',
  ];
}
