import React from "react";
import "./ExampleCss.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

function LogIn() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    timeout: 15000, // Set the timeout duration in milliseconds (e.g., 5000ms = 5 seconds)
  });

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
      setLoading(true);
      setErrorMessage("");

      console.log("Button clicked with value:", user, {
        withCredentials: true,
      });
      console.log(`${apiUrl}/api/v1/user/login`);
      axiosInstance
        .post(`${apiUrl}/api/v1/user/login`, user)
        .then((response) => {
          // Handle the response
          setLoading(false);
          navigate(`/verify?authToken=${response.data.data}`);
        })

        .catch((error) => {
          if (error.code === "ECONNABORTED") {
            // Handle request timeout
            setLoading(false);
            setErrorMessage(error.response.data.message);
            console.log("Request timed out");
          } else {
            // Handle other errors
            console.error(error);
            setLoading(false);
            setErrorMessage(error.response.data.message);
          }
        });
    }
  };

  return (
    <div className="FormPage">
      <div className="FormBox">
        <div className="LeftBox">
          <div className="LeftCloud">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="40%"
              alt="logo"
            />
          </div>
          <div className="FormLogo"></div>
          <div className="FormWrapper">
            <div className="LFormTitle">LogIn to your account</div>
            <form onSubmit={handleClick}>
              <div className="Row">
                <input
                  className="Code"
                  type="text"
                  placeholder="+91"
                  readOnly
                />
                <input
                  className="Input"
                  type="text"
                  value={number}
                  onChange={(e) => handleInputChange(e, 0, e.target.value)}
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                />
              </div>
              {<div className="Error"> {errorMessage}</div>}
              <div className="Row">
                <label className="TC">
                  By continuing, you agree to our{" "}
                  <Link className="Link">Terms of use</Link> and{" "}
                  <Link className="Link">Privacy Policy</Link>
                </label>
              </div>
              <div className="Row">
                {loading ? (
                  <div className="Loading">
                    <ScaleLoader
                      color="#ffffff"
                      loading={loading}
                      height={25}
                      width={3}
                    />
                  </div>
                ) : (
                  <input type="submit" className="Btn" value="Request Otp" />
                )}
              </div>
            </form>
            <div className="Row">
              <Link className="Link" to="/signup">
                New to here? Create an account
              </Link>
            </div>
          </div>
        </div>

        <div className="RightBox">
          <div className="RightImage"></div>
          <div className="RightCloud">
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
