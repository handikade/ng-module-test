import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () =>
      import('./modules/invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
