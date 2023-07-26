import React from "react";
import ProductMenu from "./ProductMenu";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductPage(props) {
  const location = useLocation(props);
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const {keyword} = useParams();
  console.log("products", keyword)

  return (
    <>
      <ProductMenu category={category} />
    </>
  );
}

export default ProductPage;
