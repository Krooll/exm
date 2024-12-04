import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {StoreModule} from "@ngrx/store";
import {PRODUCT_LIST_FEATURES, productReducer} from "../../reducers/product.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "../../effects/product.effects";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductListComponent },
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(PRODUCT_LIST_FEATURES, productReducer),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductListModule {}
