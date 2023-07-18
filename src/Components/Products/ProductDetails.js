import React from "react";
import "../../Css files/Products.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import DiscountedPrice from "./DiscountedPrice";
import { useState } from "react";

function ProductDetails() {
  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const handleInputChange = (e, index, value) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setNumber(numericValue);
    if (numericValue >= "0" && numericValue <= "9") {
      handleContact(index, value);
    }
  };

  function handleContact(index, value) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (inputValues[0] === "") {
      setErrorMessage("Please Enter Mobile Number");
    } else if (inputValues[0].length !== 5) {
      setErrorMessage("Please Enter a Valid Mobile Number");
    } else {
      setErrorMessage("Please Enter a Valid Mobile Number");
    }
  };

  return (
    <div className="DetailsBox">
      <div className="DetImage"></div>
      <div className="Details">
        <div className="DetailsTitle">
          <label className="Title">TITLE</label>
          <label className="Subtitle">SUBTITLE.</label>
          <label className="Rating">
            <Rating
              name="half-rating"
              defaultValue={3}
              precision={0.5}
              icon={<StarIcon fontSize="large" sx={{ color: "#ff8c4b" }} />}
              emptyIcon={
                <StarIcon fontSize="large" style={{ opacity: 0.55 }} />
              }
              readOnly
            />
          </label>
          <div className="Price">
            <label>
              <DiscountedPrice price={""} />
            </label>
            <label className="Discounted">
              <DiscountedPrice price={""} />
            </label>
            <label className="Offer">Offer</label>
          </div>
        </div>
        <div className="DetailsDelivery">
          <div className="Heading">
            <label className="One">Delivery Details</label>
            <label className="Two">
              {" "}
              Check estimated delivery date/pickup option
            </label>
          </div>
          <div className="Row">
            <input
              className="Input"
              type="text"
              maxLength={5}
              value={number}
              onChange={(e) => handleInputChange(e, 0, e.target.value)}
              placeholder="Apply Valid Pincode"
            />

            <input
              className="Code"
              type="text"
              placeholder="CHECK"
              readOnly
              onClick={handleClick}
            />
            {<div className="Error"> {errorMessage}</div>}
          </div>
        </div>
        <div className="DetailsQuantity">
          <label>HRX by Hrithik Roshan</label>
          <label>Men Navy Blue Printed Sweatshirt</label>
          <label>Rs. 599</label>
        </div>
        <div className="DetailsCoupon">
          <label>HRX by Hrithik Roshan</label>
          <label>Men Navy Blue Printed Sweatshirt</label>
        </div>
        <div className="DetailsButtons">
          <label>HRX by Hrithik Roshan</label>
          <label>Men Navy Blue Printed Sweatshirt</label>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
