import React from "react";
import "./Header.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import HeaderMenu from "./HeaderMenu";
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
// import Drawer from '@mui/material/Drawer';

function AppHeader() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 4,
      top: 6,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const clickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const clickLink = (option) => {
    if (option === "SignUp") {
      navigate(`/signup`);
    } else {
      navigate(`/login`);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <HeaderMenu />
        </div>
      </div>

      <div className="BigHead2">
        <div className="HeadSearch">
          <img
            className="SearchIcon"
            src="../Images/search-icon.svg"
            alt="searchicon"
          />
          <input
            type="text"
            className="Search"
            placeholder="Search for Products or Brands......"
          />
        </div>
        <div className="HeadIcons">
          <Link className="link" onClick={clickMenu}>
            <PersonOutlinedIcon />
          </Link>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Paper elevation={0} sx={{ width: 250 }}>
              <div className="MenuHeading">
                <label className="Welcome">Welcome</label>
                <label className="Welcome2">
                  To access account and manage orders
                </label>
              </div>

              <label
                className="Login_Button"
                onClick={() => clickLink("SignUp")}
              >
                LOGIN/SIGNUP
              </label>

              <Divider />
              <div className="MenuList">
                <label onClick={() => clickLink("SignUp")}>Orders</label>

                <label onClick={() => clickLink("SignUp")}>Wishlist</label>

                <label onClick={() => clickLink("SignUp")}>ContactUs</label>
              </div>
            </Paper>
          </Menu>

          <Link className="link">
            <FavoriteBorderOutlinedIcon />
          </Link>

          <Link className="link2">
            <StyledBadge variant="dot" color="primary">
              <ShoppingBagOutlinedIcon />
            </StyledBadge>
          </Link>
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
