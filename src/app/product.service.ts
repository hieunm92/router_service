import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'SP1',
      description: 'mauu den'
    },
    {
      id: 2,
      name: 'SP2',
      description: 'mau vang'
    },
    {
      id: 3,
      name: 'sp3',
      description: 'mau trang'
    }
  ];

  getAll(): IProduct[] {
    return this.products;
  }
  getProductById(id: number): IProduct{
    return this.products[id - 1];
  }
  // tslint:disable-next-line:typedef
  createNew(product: IProduct){
    product.id = this.products.length + 1;
    this.products.push(product);
  }
  constructor() { }
}
