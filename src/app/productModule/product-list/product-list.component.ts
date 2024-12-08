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
  products$ = this.store.select(selectProducts);
  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);

  constructor() {
  }

  ngOnInit(): void {
    this.store.dispatch(getProductList());
    this.products$.subscribe(data => {
      console.log('products', data);
    });
  }
}
