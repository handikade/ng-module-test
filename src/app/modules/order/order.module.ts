import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { OrderRoutingModule } from './order-routing.module';
import { MaterialSharedModule } from '../material-shared.module';
import { PrimengSharedModule } from '../primeng-shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialSharedModule,
    PrimengSharedModule,
  ],
  declarations: [OrderComponent],
})
export class OrderModule {}
