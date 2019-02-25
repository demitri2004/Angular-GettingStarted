import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detatil.component.html',
  styleUrls: ['./product-detatil.component.css']
})
export class ProductDetatilComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: '';

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): any {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    )
  }

  onBack():void {
    this.router.navigate(['/products']);
  }
}
