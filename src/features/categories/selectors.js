import { createSelector } from "@reduxjs/toolkit";

const getCategoriesSlice = (state) => state.categories;

export const categoriesSelect = createSelector(getCategoriesSlice, (data) => {
  return data.list;
});
