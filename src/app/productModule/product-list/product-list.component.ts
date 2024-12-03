import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Product} from "../../../reducers/product.reducers";
import {selectError, selectIsLoading, selectProducts} from "../../../selectors/product.selectors";
import {getProductList} from "../../../actions/product.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  store = inject(Store)
  products$: Observable<Product[]>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor() {
    this.products$ = this.store.select(selectProducts);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(getProductList());
    this.store.subscribe(data => console.log(data));
    this.products$.subscribe(data => console.log(data));
    this.isLoading$.subscribe(data => console.log(data));
    this.error$.subscribe(data => console.log(data));
  }
}
