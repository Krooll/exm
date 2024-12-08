import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Product, ProductState} from "../../../reducers/product.reducers";
import {selectCounter, selectError, selectIsLoading, selectProducts} from "../../../selectors/product.selectors";
import {getProductList, getProductListFailure} from "../../../actions/product.actions";
import {map} from "rxjs/operators";
import {decrementProductCounter, incrementProductCounter} from "../../../actions/product-counter.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  store = inject(Store)
  products$ = this.store.select(selectProducts)
  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);
  counter$ = (productId: number) => this.store.select(selectCounter(productId));


  constructor() {
  }

  ngOnInit(): void {
    this.store.dispatch(getProductList());
  }

  incrementCounter(productId: number): void {
    this.store.dispatch(incrementProductCounter({productId}));
  }

  decrementCounter(productId: number): void {
    this.store.dispatch(decrementProductCounter({productId}));
  }
}
