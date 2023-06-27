import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../Css files/SLForm.css";
import axios from "axios";

function SignUp() {
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

  const handleInputChangeName = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const navigate = useNavigate();
  function handleContact(index, value) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }

  const clickLink = () => {
    navigate(`/login`);
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
    } else if (inputValues[1] === "") {
      setErrorMessage("Please Enter Full Name");
    } else {
      const user = {
        fullName: inputValues[1],
        mobileNo: inputValues[0],
      };

      console.log("Button clicked with value:", inputValues);
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
          <div className="SForm">
            <div className="One">
              <img
                src="../Images/coral.png"
                height="90%"
                width="80%"
                alt="logo"
              />
            </div>
            <form onSubmit={handleClick} className="form">
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
                    value={number}
                    onChange={(e) => handleInputChange(e, 0, e.target.value)}
                  />
                </div>
                <div className="Text">
                  <input
                    className="Input2"
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => handleInputChangeName(1, e.target.value)}
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
                  Already an user? Click here to LogIn
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

export default SignUp;
