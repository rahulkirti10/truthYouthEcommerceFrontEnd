import React from "react";
import "../Css files/Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function AppFooter() {
  return (
    <div className="Foot">
      <div className="Footer">
        <div className="FooterLeft">
          <div className="FooterLeftOne">
            <label className="Heading"> Shop by Category </label>
            <Link className="list" to="/">
              {" "}
              Skincare{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Personal Care{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Handbags{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Apparels{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Watches{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Eye Wear{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Jewellery{" "}
            </Link>
          </div>
          <div className="FooterLeftOne">
            <label className="Heading"> About </label>
            <Link className="list" to="/">
              {" "}
              Contact Us{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              About Us{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Handbags{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Careers{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Press{" "}
            </Link>
          </div>
          <div className="FooterLeftOne">
            <label className="Heading"> Policy </label>
            <Link className="list" to="/">
              {" "}
              Return Policy{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Terms of Use{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Sitemap{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Security{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              Privacy{" "}
            </Link>
            <Link className="list" to="/">
              {" "}
              EPR Compliance{" "}
            </Link>
          </div>
        </div>

        <div className="FooterRight">
          <div className="FooterRightUp">
            <Link className="link" to="/">
              <FacebookIcon fontSize="large" />{" "}
            </Link>
            <Link className="link" to="/">
              <TwitterIcon fontSize="large" />
            </Link>
            <Link className="link" to="/">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link className="link" to="/">
              <YouTubeIcon fontSize="large" />
            </Link>
          </div>
          <div className="FooterRightDown">
            <label className="Location">
              {" "}
              <LocationOnOutlinedIcon />
              New Delhi, India
            </label>
            <label className="Rights">
              {" "}
              &#169; 2023 | Coral Levine All Rights Reserved
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
