import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const productId = +params['productId'];

      this.productsService.get(productId).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addDetail(product) {
    product.details.push({});
  }

  onSubmit() {
    this.productsService.update(this.product).subscribe(() => this.router.navigateByUrl('/products'));
  }
}
