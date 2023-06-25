import React from "react";
import "../../Css files/Sections.css";
import NewArrivalCard from "./NewArrivalCard";

function NewArrivals() {
  return (
    <div className="Arrivals">
      <div className="ArrivalTitle">
        <label className="One">New Arrivals</label>

        <label className="Two">
          View All
          <img
            className="ArrowIcon"
            src="../Images/right-arrow.svg"
            alt="searchicon"
          />
        </label>
      </div>
      <div className="ArrivalList">
        <NewArrivalCard
          image="../Images/Tshirt1.png"
          name="HRX by Hrithik Roshan"
          subtitle="Running Bio-Wash T-shirt"
          price="Rs. 454"
        />
        <NewArrivalCard
          image="../Images/Tshirt2.png"
          name="Park Avenue"
          subtitle="Men Polo Collar Slim Fit T-shirt"
          price="Rs. 674"
        />
        <NewArrivalCard
          image="../Images/Tshirt3.png"
          name="HRX by Hrithik Roshan"
          subtitle="Men Navy Blue Printed Sweatshirt"
          price="Rs. 599"
        />
        <NewArrivalCard
          image="../Images/Tshirt4.png"
          name="Roadster"
          subtitle="Shadow Check Casual Shirt"
          price="Rs. 779"
        />
      </div>
    </div>
  );
}

export default NewArrivals;
