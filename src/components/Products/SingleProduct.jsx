import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/products/productSlice";
import {
  productSelect,
  productReleatedSelect,
} from "../../features/products/selectors";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const related = useSelector(productReleatedSelect);
  const list = useSelector(productSelect);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  useEffect(() => {
    if (!data || !list.length) return;
    if (data) {
      dispatch(getRelatedProducts(data.category.id));
    }
  }, [data, dispatch, list.length]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product purchase={Math.floor(Math.random() * 20)} {...data} />
      <Products products={related} amound={4} title="Related Products" />
    </>
  );
};

export default SingleProduct;
