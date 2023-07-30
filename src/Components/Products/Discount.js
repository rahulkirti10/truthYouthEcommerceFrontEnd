import React from "react";

function Discount({ original, discount }) {
  const Price = original - discount;
  const DiscountedPrice = (Price / discount) * 100;
  return <div>{DiscountedPrice.toFixed(0)}% OFF</div>;
}

export default Discount;
