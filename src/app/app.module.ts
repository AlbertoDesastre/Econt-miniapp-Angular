import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

import { CheckoutSummaryComponent } from './components/checkout-summary/checkout-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressesComponent,
    CartPreviewComponent,
    InvoicesComponent,
    CheckoutSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
