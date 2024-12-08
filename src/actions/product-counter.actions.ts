import {createAction, props} from "@ngrx/store";

export const incrementProductCounter = createAction(
  '[Product] Increment Counter',
  props<{productId: number}>()
);

export const decrementProductCounter = createAction(
  '[Product] Decrement Counter',
  props<{productId: number}>()
)
