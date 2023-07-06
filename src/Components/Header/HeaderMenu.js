import Divider from "@mui/material/Divider";
import React from "react";
import "./HeaderMenu.css";

function HeaderMenu() {
  return (
    <div className="HeadNav">
      <div className="HoverMenu">
        <label className="link">Men</label>

        <div className="SubMenu">
          <label className="SubMenuHeading">Men</label>
          <div className="SubMenuBox">
            <label>Brocode</label>

            <label>Full Sleeves Tshirts</label>

            <label>Half Sleeves Tshirts</label>
            <label>Oversized </label>

            <label>Polo collar</label>

            <label>V neck</label>
            <label>Round neck</label>

            <label>Plain tshirts</label>

            <label>Printed</label>
            <label>3/4th</label>

            <label>Tshirt combos</label>

            <label>Plain shorts</label>
            <label>Printed shorts</label>
          </div>
        </div>
      </div>
      <div className="HoverMenu">
        <label className="link">Women</label>

        <div className="SubMenu">
          <label className="SubMenuHeading">Women</label>
          <div className="SubMenuBox">
            <label>Besties & Bros</label>
            <label>Boyfriend</label>
            <label>Full Sleeves Tshirts</label>

            <label>Half Sleeves Tshirts</label>
            <label>Oversized </label>

            <label>Polo collar</label>

            <label>V neck</label>
            <label>Round neck</label>

            <label>Plain tshirts</label>

            <label>Printed</label>
            <label>3/4th</label>

            <label>Tshirt combos</label>

            <label>Plain shorts</label>
            <label>Printed shorts</label>
          </div>
        </div>
      </div>
      <div className="HoverMenu">
        <label className="link">You & Me</label>

        <div className="SubMenu">
          <label className="SubMenuHeading">You & Me</label>
          <div className="SubMenuBox">
            <label>Better Half</label>
            <label>Couple Tshirt</label>
            <label>Soulmates</label>

            <label>Forever Together</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
