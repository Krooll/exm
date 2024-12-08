import {createReducer, on} from "@ngrx/store";
import {getProductList, getProductListFailure, getProductListSuccess} from "../actions/product.actions";

export interface Product {
  id: number,
  name: string,
  price: number,
  category: string
}

export interface ProductState {
  isLoading: boolean,
  products: Product[],
  error: string | null
}

export const initialState: ProductState = {
  isLoading: false,
  products: [],
  error: null
};

export const PRODUCT_LIST_FEATURES = 'products';

export const productReducer = createReducer(
  initialState,
  on(getProductList, (state) => ({
    ...state,
    isLoading: true,
    products: [],
    error: null
  })),
  on(getProductListSuccess, (state, {products}) => ({
    ...state,
    isLoading: false,
    products,
    error: null
  })),
  on(getProductListFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    products: [],
    error: error
  }))
)

