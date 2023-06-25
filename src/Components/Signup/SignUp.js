import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Css files/SLForm.css";

function SignUp() {
  const navigate = useNavigate();
  const clickLink = () => {
    navigate(`/signup`);
  };

  const handleClick = () => {
    navigate(`/verify`);
  };

  return (
    <div className="SLPage">
      <div className="SLBox">
        <div className="SLBoxLeft">
          <div className="LeftTop">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="50%"
              alt="logo"
            />
          </div>

          <div className="SForm">
            <div className="One">
              <img
                src="../Images/coral.png"
                height="80%"
                width="90%"
                alt="logo"
              />
            </div>

            <div className="Two">
              <label>Signup with your mobile number to get started</label>
              <div className="Text">
                <input
                  className="Code"
                  type="text"
                  placeholder="+91"
                  readOnly
                />
                <input
                  className="Input"
                  type="text"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="Text">
                <input
                  className="Input2"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div className="Three">
              <label className="TC">
                By continuing, you agree to our{" "}
                <Link className="New2">Terms of use</Link> and{" "}
                <Link className="New2">Privacy Policy</Link>
              </label>
              <input
                type="submit"
                className="Btn"
                value="Request OTP"
                onClick={() => handleClick()}
              />
              <label className="New" onClick={() => clickLink()}>
                Already an user? Click here to LogIn
              </label>
            </div>
          </div>
        </div>

        <div className="SLBoxRight">
          <div className="RightTop">
            <img
              src="../Images/24493638_6941053.svg"
              height="100%"
              width="80%"
              alt="logo"
            />
          </div>

          <div className="RightDown">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="100%"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
