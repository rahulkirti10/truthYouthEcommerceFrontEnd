import React, { useState } from "react";
import "./Header.css";
import "./HeaderMenu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import HeaderSearch from "./HeaderSearch";
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
// import Drawer from '@mui/material/Drawer';
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";

function AppHeader() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [textSearch, setTextSearch] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSearchBar = (e) => {
    e.preventDefault();

    console.log(keyword);

    setKeyword(e.target.value);
    if (keyword !== "") {
      axios
        .get(`${apiUrl}/api/v1/product/homeSearch?keyword=${keyword}`)
        .then((response) => {
          // Handle the response

          setMenuVisible(true);
          setTextSearch("");

          console.log(response.data.data);
          setTextSearch(response.data.data);
        })
        .catch((error) => {
          // Handle the error
          console.log(error);
        });
    }
  };

  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   "& .MuiBadge-badge": {
  //     right: 4,
  //     top: 6,
  //   },
  // }));

  const clickLink = (option) => {
    if (option === "SignUp") {
      navigate(`/signup`);
    } else {
      navigate(`/login`);
    }
  };

  // const [state, setState] = useState({
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  // const list= (anchor) => (
  //   <div className='BurgerMenuA' >
  //   <div className='Cross'>
  //   <ClearSharpIcon sx={{cursor:'pointer'}} onClick={toggleDrawer(anchor, false)}/>
  //   </div>
  //   <div className='SideNav'>
  //         <label className='link' onClick={() => handleClick("Handbags")} >Handbags</label>
  //         <label className='link'>Watches</label>
  //         <label className='link'>Skincare</label>
  //         <label className='link'>Jewellery</label>
  //         <label className='link'>Apparels</label>
  //   </div>
  //   </div>);

  return (
    <div className="Head">
      <div className="BigHead1">
        <div className="HeadLogo"></div>
        <div className="HeadNav">
          <div className="HoverMenu">
            <label className="link">Men</label>

            <div className="SubMenu">
              <label className="SubMenuHeading">Men</label>
              <div className="SubMenuBox">
                <label onClick={() => handleClick("Brocode")}>Brocode</label>

                <label onClick={() => handleClick("Full Sleeves Tshirts")}>
                  Full Sleeves Tshirts
                </label>

                <label onClick={() => handleClick("Half Sleeves Tshirts")}>
                  Half Sleeves Tshirts
                </label>
                <label onClick={() => handleClick("Oversized")}>
                  Oversized{" "}
                </label>

                <label onClick={() => handleClick("Polo Collar")}>
                  Polo Collar
                </label>

                <label onClick={() => handleClick("V Neck")}>V neck</label>
                <label onClick={() => handleClick("Round Neck")}>
                  Round Neck
                </label>

                <label onClick={() => handleClick("Plain Tshirts")}>
                  Plain Tshirts
                </label>

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
                <label onClick={() => handleClick("Full Sleeves Tshirts")}>
                  Full Sleeves Tshirts
                </label>

                <label onClick={() => handleClick("Half Sleeves Tshirts")}>
                  Half Sleeves Tshirts
                </label>
                <label onClick={() => handleClick("Oversized")}>
                  Oversized{" "}
                </label>

                <label onClick={() => handleClick("Polo Collar")}>
                  Polo Collar
                </label>

                <label onClick={() => handleClick("V Neck")}>V neck</label>
                <label onClick={() => handleClick("Round Neck")}>
                  Round Neck
                </label>

                <label onClick={() => handleClick("Plain Tshirts")}>
                  Plain Tshirts
                </label>
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

            <div className="SubMenu2">
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
      </div>

      <div className="BigHead2">
        <div className="HeadSearch">
          <div className="HeadSearch1">
            <img
              className="SearchIcon"
              src="../Images/search-icon.svg"
              alt="searchicon"
            />
            <input
              type="text"
              className="Search"
              placeholder="Search for Products or Brands......"
              onChange={(e) => handleSearchBar(e)}
            />
          </div>
          <div className="SeachSuggestions">
            <div className="SeachSuggestions1">
              {menuVisible ? <HeaderSearch data={textSearch} /> : null}
            </div>
          </div>
        </div>
        <div className="HeadIcons">
          <div className="HoverIcon">
            <label className="link">
              <PersonOutlinedIcon />
            </label>

            <div className="SubMenu">
              <div className="SubMenuHeading">
                <label className="One">Welcome</label>
                <label>To acccess accounts & manage orders</label>
                <label className="Login_Button" onClick={clickLink}>
                  Login/Signup
                </label>
              </div>
              <div className="SubMenuBox">
                <label>
                  <ReceiptLongOutlinedIcon sx={{ marginRight: "5px" }} />
                  Orders
                </label>
                <label>
                  <FavoriteBorderOutlinedIcon sx={{ marginRight: "5px" }} />
                  Wishlist
                </label>
                <label>
                  <CallOutlinedIcon sx={{ marginRight: "5px" }} />
                  Contact Us
                </label>
              </div>
            </div>
          </div>

          <Link className="link2">
            <FavoriteBorderOutlinedIcon />
          </Link>

          <div className="HoverIcon">
            <label className="link2">
              {/* <StyledBadge variant="dot" color="primary"> */}
              <ShoppingBagOutlinedIcon />
              {/* </StyledBadge> */}
            </label>

            <div className="SubMenu">
              <div className="SubMenuHeading">
                <label className="One">Welcome</label>
                <label>Your Cart is Empty</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;

//   {/* {['right'].map((anchor) => (
//     <React.Fragment key={anchor}>
//  <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>
//  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//   {list}
//       </Drawer>
//     </React.Fragment>
//   ))}  */}

// {/* <div className='Menu2'>
// {['right'].map((anchor) => (
//     <React.Fragment key={anchor}>
//  <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>
//  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//   {list(anchor)}
//       </Drawer>
//     </React.Fragment>
//   ))}
// </div>     */}
