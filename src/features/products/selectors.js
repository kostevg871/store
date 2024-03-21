import { createSelector } from "@reduxjs/toolkit";

const getProductsSlice = (state) => state.products;

export const productSelect = createSelector(
  getProductsSlice,
  (data) => data.list
);

export const productFilteredSelect = createSelector(
  getProductsSlice,
  (data) => data.filtered
);

export const productReleatedSelect = createSelector(
  getProductsSlice,
  (data) => data.related
);
