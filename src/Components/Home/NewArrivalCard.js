import React from "react";
import "../../Css files/Sections.css";

function NewArrivalCard({ image, name, subtitle, price }) {
  return (
    <div className="ArrivalCard">
      <div className="ArrivalCardImg">
        <img src={image} alt={image} height="100%" width="75%" />
      </div>
      <div className="ArrivalCardDet">
        <label className="Title"> {name} </label>
        <label className="SubTitle"> {subtitle} </label>
        <label className="Price"> {price} </label>
      </div>
    </div>
  );
}

export default NewArrivalCard;
