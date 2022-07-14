import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { MaterialSharedModule } from '../material-shared.module';
import { PrimengSharedModule } from '../primeng-shared.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialSharedModule,
    PrimengSharedModule,
  ],
  declarations: [InvoiceComponent],
})
export class InvoiceModule {}
