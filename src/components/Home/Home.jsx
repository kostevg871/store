import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

import { categoriesSelect } from "../../features/categories/selectors";
import {
  productFilteredSelect,
  productSelect,
} from "../../features/products/selectors";
import { filterByPrice } from "../../features/products/productSlice";

const Home = () => {
  const dispacth = useDispatch();
  const categories = useSelector(categoriesSelect);
  const products = useSelector(productSelect);
  const productsFiltered = useSelector(productFilteredSelect);

  useEffect(() => {
    if (!products.length) return;
    dispacth(filterByPrice(981));
  }, [dispacth, products.length]);

  return (
    <>
      <Poster />
      <Products products={products} amound={4} title="Treading" />
      <Categories categories={categories} amound={5} title="Worth seeing" />
      <Banner />
      <Products products={productsFiltered} amound={4} title="Less then 100$" />
    </>
  );
};

export default Home;
