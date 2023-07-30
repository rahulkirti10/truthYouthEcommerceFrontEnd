import React from "react";
import axios from "axios";
import "../../Css files/Products.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import PriceFormat from "./PriceFormat";
import { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Discount from "./Discount";

function ProductDetails() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const [products, setProducts] = useState("");
  const navigate = useNavigate();
  // const [condition, setCondition] = useState("Description");

  useEffect(() => {
    if (typeof id === "undefined") {
      //   axios
      //     .get(
      //       `${apiUrl}/api/v1/product/getProductByKeyword?id=all`
      //     )
      //     .then((response) => {
      //       setProducts(response.data.data);
      //     })
      navigate(`/`);
      // .catch((error) => {
      //   console.log(error);
      // });
    } else {
      axios
        .get(`${apiUrl}/api/v1/product/getProductById?id=${id}`)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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

  // const handleCondition = (e, index) => {
  //   if (index === "Description") {
  //     setCondition(index);
  //   } else if (index === "Related") {
  //     setCondition(index);
  //   } else if (index === "Rating") {
  //     setCondition(index);
  //   }
  // };

  const handleClick = (e) => {
    e.preventDefault();

    if (inputValues[0] === "") {
      setErrorMessage("Please Enter Pincode");
    } else if (inputValues[0].length !== 5) {
      setErrorMessage("Please Enter a Valid Pincode");
    } else {
      setErrorMessage("Please Enter a Valid Pincode");
    }
  };

  return (
    <>
      <div className="DetailsBox">
        <div className="DetImage">
          <div className="Image">
            {" "}
            <img
              src={products.frontImageUrl}
              alt={products.name}
              height="70%"
              width="50%"
            />
          </div>
          <div className="Option"></div>
        </div>
        <div className="Details">
          <div className="DetailsTitle">
            <label className="Title">{products.name}</label>
            {/* <label className="Subtitle">SUBTITLE.</label> */}
            {/* <label className="Rating">
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
            </label> */}
            <div className="Price">
              <label>
                <PriceFormat price={products.discountedPrice} />
              </label>
              <label className="Discounted">
                <PriceFormat price={products.originalPrice} />
              </label>
              <label className="Offer">
                <Discount
                  original={products.originalPrice}
                  discount={products.discountedPrice}
                />
              </label>
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
              <div style={{ marginTop: "40px" }}>
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
              </div>
              {<div style={{ color: "red" }}> {errorMessage}</div>}
            </div>
          </div>
          <div className="DetailsQuantity">
            <label className="Title">Quantity:</label>
            <label className="Sign">-</label>
            <input className="Box" type="text" value={0} />
            <label className="Sign2">+</label>
          </div>

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
            // onClick={(e) => handleCondition(e, "Description")}
          >
            Product Description
          </button>
          <button
            className="HeadTitle"
            // onClick={(e) => handleCondition(e, "Related")}
          >
            Related Products
          </button>
          <button
            className="HeadTitle"
            // onClick={(e) => handleCondition(e, "Rating")}
          >
            Ratings and Reviews
          </button>
        </div>

        <div className="DetailsBoxDesc">
          <div className="Data">
            <label>Description :</label>
            <p
              style={{ textTransform: "capitalize" }}
              dangerouslySetInnerHTML={{ __html: products.description }}
            />
          </div>
          <div className="Data">
            <label>Material & Care :</label>
            <p
              style={{ textTransform: "capitalize" }}
              dangerouslySetInnerHTML={{ __html: products.materialAndCare }}
            />
          </div>
          <div className="Data">
            <label>Color :</label>
            <p
              style={{ textTransform: "capitalize" }}
              dangerouslySetInnerHTML={{ __html: products.color }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
