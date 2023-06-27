import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Css files/SLForm.css";
import axios from "axios";

function LogIn() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const [number, setNumber] = useState("");

  const handleInputChange = (e, index, value) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setNumber(numericValue);
    if (numericValue >= "0" && numericValue <= "9") {
      handleContact(index, value);
    }
  };

  const navigate = useNavigate();
  function handleContact(index, value) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }
  const clickLink = () => {
    navigate(`/signup`);
  };

  // const handleClick = () => {
  //   navigate(`/verify`);
  // };

  const handleClick = (e) => {
    e.preventDefault();

    if (inputValues[0] === "") {
      setErrorMessage("Please Enter Mobile Number");
    } else if (inputValues[0].length !== 10) {
      setErrorMessage("Please Enter a Valid Mobile Number");
    } else {
      let user = {
        emailOrMobile: inputValues[0],
      };

      setErrorMessage("");

      console.log("Button clicked with value:", user, {
        withCredentials: true,
      });
      console.log(`${apiUrl}/api/v1/user/login`);
      axios
        .post(`${apiUrl}/api/v1/user/login`, user)
        .then((response) => {
          // Handle the response
          navigate(`/verify?authToken=${response.data.data}`);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
          setErrorMessage(error.response.data.message);
        });
    }
  };

  return (
    <div className="SLPage">
      <div className="SLBox">
        <div className="SLBoxLeft">
          <div className="LeftTop">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="40%"
              alt="logo"
            />
          </div>

          <div className="LForm">
            <div className="One">
              <img
                src="../Images/coral.png"
                height="80%"
                width="90%"
                alt="logo"
              />
            </div>
            <form onSubmit={handleClick} className="form">
              <div className="Two">
                <label>LogIn to your account</label>
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
                    onChange={(e) => handleInputChange(e, 0, e.target.value)}
                    value={number}
                  />
                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
              </div>

              <div className="Three">
                <label className="TC">
                  By continuing, you agree to our{" "}
                  <Link className="New2">Terms of use</Link> and{" "}
                  <Link className="New2">Privacy Policy</Link>
                </label>
                <input type="submit" className="Btn" value="Request OTP" />

                <label className="New" onClick={() => clickLink()}>
                  New to here? Create an account
                </label>
              </div>
            </form>
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

export default LogIn;
