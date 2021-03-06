import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { NewProductComponent } from './new-product/new-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: 'products', component: ProductsListComponent, pathMatch: 'full' },
  { path: 'new-product', component: NewProductComponent },
  { path: 'edit-product/:productId', component: EditProductComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NewProductComponent,
    NavbarComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
