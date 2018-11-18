import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product = new Product();

  constructor(
    private productsService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addDetail(product) {
    product.details.push({});
  }

  onSubmit() {
    this.productsService.create(this.product).subscribe(() => this.router.navigateByUrl('/products'));
  }
}
