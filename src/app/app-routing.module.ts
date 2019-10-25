import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ConectarServiciosComponent } from './conectar-servicios/conectar-servicios.component';
import { DailyVenComponent } from './daily-ven/daily-ven.component'


const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  }, {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }, {
    path: 'products',
    component: ProductGetComponent
  }, {
    path: 'conectar/servicios',
    component: ConectarServiciosComponent
  },
  {
    path: 'dayven',
    component: DailyVenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
