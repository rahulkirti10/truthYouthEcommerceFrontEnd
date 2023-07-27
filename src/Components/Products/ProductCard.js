import React from "react";
import "../../Css files/Products.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productdet`);
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
        <label className="Subtitle">
        <span dangerouslySetInnerHTML={{ __html: props.subtitle }} />
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
        <label className="Price">{props.price}</label>
      </div>
    </div>
  );
}

export default ProductCard;
