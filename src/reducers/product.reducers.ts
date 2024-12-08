import {createReducer, on} from "@ngrx/store";
import {getProductList, getProductListFailure, getProductListSuccess} from "../actions/product.actions";
import {decrementProductCounter, incrementProductCounter} from "../actions/product-counter.actions";

export interface Product {
  id: number,
  name: string,
  price: number,
  category: string
  counter: number
}

export interface ProductState {
  isLoading: boolean,
  products: Product[],
  error: string | null
}

export const initialState: ProductState = {
  isLoading: false,
  products: [],
  error: null,
};

export const PRODUCT_LIST_FEATURES = 'products';

export const productReducer = createReducer(
  initialState,
  on(getProductList, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(getProductListSuccess, (state, {products}) => ({
    ...state,
    isLoading: false,
    products,
  })),
  on(getProductListFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),
  on(incrementProductCounter, (state, {productId}) => ({
    ...state,
    products: state.products.map(product => product.id === productId ? {...product, counter: product.counter + 1} : product)
  })),
  on(decrementProductCounter, (state, {productId}) => ({
    ...state,
    products: state.products.map(product =>
      product.id === productId
        ? { ...product, counter: Math.max((product.counter || 0) - 1, 0) }
        : product
    )
  }))
)

