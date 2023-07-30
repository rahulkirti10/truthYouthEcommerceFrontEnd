import React from "react";
import "../../Css files/Products.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Rating from "@mui/material/Rating";
// import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import PriceFormat from "./PriceFormat";
import ShortDesc from "./ShortDesc";
import Discount from "./Discount";

function ProductCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productdet/${props.id}`);
  };

  return (
    <div className="ProductCard">
      <div className="Image">
        <img
          src={props.image}
          alt={props.image}
          height="100%"
          width="75%"
          onClick={handleClick}
        />
      </div>
      <div className="Data">
        <label className="Title">
          {props.name}
          <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
        </label>
        {/* <label className="Rating">
          <Rating
            name="half-rating"
            defaultValue={3}
            precision={0.5}
            icon={<StarIcon fontSize="inherit" sx={{ color: "#ff8c4b" }} />}
            emptyIcon={
              <StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />
            }
            readOnly
          />
        </label> */}
        <div className="Price">
          <label>
            <PriceFormat price={props.discount} />
          </label>
          <label className="Discounted">
            <PriceFormat price={props.original} />
          </label>
          <label className="Offer">
            <Discount original={props.original} discount={props.discount} />
          </label>
        </div>
        <label className="Subtitle">
          <ShortDesc desc={props.subtitle} />
          <label style={{ marginLeft: "2px" }}>....</label>{" "}
          {/* <span dangerouslySetInnerHTML={{ __html: props.subtitle }} /> */}
        </label>

        <div className="Buttons">
          <label className="Button2"> add to cart </label>
          <label className="Button1"> buy now </label>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
