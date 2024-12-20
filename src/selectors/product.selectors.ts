import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PRODUCT_LIST_FEATURES, ProductState} from "../reducers/product.reducers";

export const selectProductState = createFeatureSelector<ProductState>(PRODUCT_LIST_FEATURES);

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

export const selectCounter = (productId: number) => createSelector(selectProducts, (product) =>
  product.find((product) => product.id === productId)?.counter || 0
)
