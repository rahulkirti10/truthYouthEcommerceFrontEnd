import { red } from "@mui/material/colors";
import React from "react";

function CartItem() {
  return (
    <div className="DataBox">
      <div className="DataBoxLeft">
        <div className="Image"></div>
        <div className="Data">
          <label style={{ fontWeight: "600" }}>Title</label>
          <label style={{ color: "#626262" }}>Subtitle</label>
          <label style={{ color: "#626262" }}>QTY</label>
        </div>
      </div>
      <div className="DataBoxRight">
        <div className="Data">
          <label>Price</label>
          <label>QTY</label>
          <label>Subtotal</label>
        </div>
        <div className="Buttons">
          <label
            style={{
              color: "#1b4b66",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Move to Wishlist
          </label>
          <label
            style={{
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {" "}
            Remove
          </label>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
