import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

import { CheckoutSummaryComponent } from './components/checkout-summary/checkout-summary.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { DropdownComponent } from './components/dropdown-cities/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressesComponent,
    CartPreviewComponent,
    InvoicesComponent,
    CheckoutSummaryComponent,
    CityItemComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
