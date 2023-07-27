import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

function AppCart() {
  return (
    <div className="CartBox">
      <div className="CartHeading">My Cart</div>
      <div className="Box">
        <div className="Left">
          <div className="LeftHeading">
            <div className="Heading">
              <div>Product Name</div>
              <div className="Head2">
                <label>Price</label>
                <label>QTY</label>
                <label> Subtotal</label>
              </div>
            </div>
          </div>
          <div className="LeftData">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="Right">
          <div className="RightHeading">Order Summary</div>
          <div className="RightData">
            <div className="Head1">
              <label style={{ color: "#626262" }}>Subtitle</label>
              <label style={{ color: "#626262" }}>Discount</label>
              <label style={{ color: "#626262" }}>Delivery Fee</label>
              <label> Grand Total</label>
            </div>
            <div className="Head1">
              <label>Subtitle</label>
              <label>Discount</label>
              <label>Delivery Fee</label>
              <label>Grand Total</label>
            </div>
          </div>
          <div className="RightButtons">
            <label>Place Order</label>
            <label>Continue Shopping</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCart;
