import React from "react";
import "../../Css files/Products.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import DiscountedPrice from "./DiscountedPrice";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ProductDetails() {
  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const [condition, setCondition] = useState("Description");

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

  const handleCondition = (e, index) => {
    if (index === "Description") {
      setCondition(index);
    } else if (index === "Related") {
      setCondition(index);
    } else if (index === "Rating") {
      setCondition(index);
    }
  };

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
    <>
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
            <label className="Title">Quantity:</label>
            <label className="Sign">-</label>
            <input className="Box" type="text" value={0} />
            <label className="Sign2">+</label>
          </div>
          {/* <div className="DetailsCoupon">
          <label>HRX by Hrithik Roshan</label>
          <label>Men Navy Blue Printed Sweatshirt</label>
        </div> */}
          <div className="DetailsButtons">
            <label className="Button1">
              <ShoppingCartOutlinedIcon sx={{ marginRight: "10px" }} /> Add to
              Cart
            </label>
            <label className="Button2">
              <FavoriteBorderOutlinedIcon sx={{ marginRight: "10px" }} /> Add to
              Wishist
            </label>
          </div>
        </div>
      </div>

      <div className="DetailsBox2">
        <div className="DetailsBoxHead">
          <button
            className="HeadTitle"
            onClick={(e) => handleCondition(e, "Description")}
          >
            Product Description
          </button>
          <button
            className="HeadTitle"
            onClick={(e) => handleCondition(e, "Related")}
          >
            Related Products
          </button>
          <button
            className="HeadTitle"
            onClick={(e) => handleCondition(e, "Rating")}
          >
            Ratings and Reviews
          </button>
        </div>

        <div className="DetailsBoxDesc">
          <label className="Data">
            Lorem ipsum dolor sit amet. Aut quasi saepe ex aliquid architecto in
            quia libero! Et doloremque similique sit inventore perspiciatis est
            voluptatem nisi et velit Quis ut explicabo sint. Ut corporis
            temporibus sed dignissimos iste aut temporibus temporibus et quis
            laborum et accusantium velit ex nemo blanditiis.
          </label>
          <label className="Data">
            Et dolorem consequatur ab internos unde ea voluptas atque. Cum
            minima eveniet est quibusdam ipsum eum ullam temporibus et minima
            quae est ipsum velit quo repudiandae commodi qui tenetur alias. Cum
            perspiciatis facilis et quia totam ut sapiente accusamus. Ad
            possimus aliquam et voluptas internos quo quia numquam. Est adipisci
            accusamus eum quisquam veniam ex suscipit suscipit.
          </label>
          <label className="Data">
            Et dolorem consequatur ab internos unde ea voluptas atque. Cum
            minima eveniet est quibusdam ipsum eum ullam temporibus et minima
            quae est ipsum velit quo repudiandae commodi qui tenetur alias. Cum
            perspiciatis facilis et quia totam ut sapiente accusamus. Ad
            possimus aliquam et voluptas internos quo quia numquam. Est adipisci
            accusamus eum quisquam veniam ex suscipit suscipit.
          </label>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
