import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {getProductList, getProductListSuccess, getProductListFailure} from '../actions/product.actions';
import {Product} from '../reducers/product.reducers';

@Injectable()
export class ProductEffects {
  private url: string = '/assets/db/products.json';
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  constructor() {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductList),
      switchMap(() =>
        this.http.get<{ products: Product[] }>(this.url).pipe(
          map(response => getProductListSuccess({ products: response.products })),
          catchError(error => of(getProductListFailure({ error: error.message })))
        )
      )
    )
  );
}
