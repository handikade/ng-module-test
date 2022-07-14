import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { OrderModule } from './modules/order/order.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // InvoiceModule,
    // OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
