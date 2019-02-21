import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html', 
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Products List';
    imgageWidth: number = 50;
    imgageMargin: number = 2; 
    showImage: boolean = false;
    errorMessage: string;
   
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
        this.productService.getProducts().subscribe(
            products => {
                this.products = products,
                this.filteredProducts = this.products
            },
            error => this.errorMessage = <any>error
        );
    }
}