import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html', 
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Products List';
    imgageWidth: number = 50;
    imgageMargin: number = 2; 
    showImage: boolean = false;
    
   
    _listFilter: string;
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor (private productService: ProductService){
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product list: " + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}