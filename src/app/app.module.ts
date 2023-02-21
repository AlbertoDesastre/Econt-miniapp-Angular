import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressesComponent,
    CartPreviewComponent,
    InvoicesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
