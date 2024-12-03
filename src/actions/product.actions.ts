import {createAction, props} from "@ngrx/store";
import {Product} from "../reducers/product.reducers";

export const getProductList = createAction('[Product] Get Product List');

export const getProductListSuccess = createAction(
  '[Product] Get Product List Success',
        props<{ products: Product[] }>()
);

export const getProductListFailure = createAction(
  '[Product] Get Product List Failure',
        props<{ error: string }>()
);
