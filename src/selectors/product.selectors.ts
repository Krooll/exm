import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PRODUCT_LIST_FEATURES, ProductState} from "../reducers/product.reducers";

export const selectProductState = createFeatureSelector<ProductState>('product');

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
)
export const selectIsLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading
)
export const selectError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
)
