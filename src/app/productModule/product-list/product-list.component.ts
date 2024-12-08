import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Product} from "../../../reducers/product.reducers";
import {selectError, selectIsLoading, selectProducts} from "../../../selectors/product.selectors";
import {getProductList, getProductListFailure} from "../../../actions/product.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  store = inject(Store)
  products$:Observable<Product[]>;
  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);

  productList: Product[] = [];
  constructor() {
    this.store.dispatch(getProductList());
  }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProducts);
    this.products$.subscribe(data => this.productList = data);
  }
}
