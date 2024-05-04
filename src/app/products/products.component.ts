import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  public isLoading = true;
  public keyword = '';
  public products: {
    id: number;
    name: string;
    price: number;
  }[] = [];
  constructor() {}

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  searchProducts() {
    if (this.keyword === '') {
      this.products = [
        { id: 1, name: 'Console', price: 3400 },
        { id: 2, name: 'Keyboard', price: 400 },
        { id: 3, name: 'Mouse', price: 9400 },
        { id: 4, name: 'Laptop', price: 4500 },
      ];
    }
    this.products = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = [
        { id: 1, name: 'Console', price: 3400 },
        { id: 2, name: 'Keyboard', price: 400 },
        { id: 3, name: 'Mouse', price: 9400 },
        { id: 4, name: 'Laptop', price: 4500 },
      ];
      this.isLoading = false;
    }, 1000);
  }
}
