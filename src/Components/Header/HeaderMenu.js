import React from "react";
import "./Header.css";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

function HeaderMenu() {
  const [men, setMen] = React.useState(null);
  const [women, setWomen] = React.useState(null);
  const [ume, setUme] = React.useState(null);
  const Mopen = Boolean(men);
  const Wopen = Boolean(women);
  const Uopen = Boolean(ume);

  const clickMen = (event) => {
    setMen(event.currentTarget);
  };

  const closeMen = () => {
    setMen(null);
  };

  const clickWomen = (event) => {
    setWomen(event.currentTarget);
  };

  const closeWomen = () => {
    setWomen(null);
  };

  const clickUme = (event) => {
    setUme(event.currentTarget);
  };

  const clsoeUme = () => {
    setUme(null);
  };

  return (
    <div className="HeadNav">
      <label className="link" onMouseEnter={clickMen}>
        Men
      </label>
      <Menu
        id="basic-menu"
        anchorEl={men}
        open={Mopen}
        onClose={closeMen}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ marginTop: "31px" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper elevation={0} sx={{ width: 200 }}>
          <div className="SubMenu">
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
        </Paper>
      </Menu>
      <label className="link" onMouseEnter={clickWomen}>
        Women
      </label>
      <Menu
        id="basic-menu"
        anchorEl={women}
        open={Wopen}
        onClose={closeWomen}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ marginTop: "31px" }}
      >
        <Paper elevation={0} sx={{ width: 200 }}>
          <div className="SubMenu">
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
        </Paper>
      </Menu>
      <label className="link">You & Me</label>
    </div>
  );
}

export default HeaderMenu;
