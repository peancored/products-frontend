import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private products: Product[] = [];

  constructor(
    private productsService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productsService.getAll()
      .subscribe((products: Product[]) => this.products = products);
  }

  deleteProduct(product: Product) {
    this.productsService.delete(product)
      .subscribe((response) => this.products.splice(this.products.indexOf(product), 1));
  }

  createProduct() {
    this.router.navigateByUrl('/new-product');
  }

}
