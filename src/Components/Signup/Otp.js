import React from "react";
import "./ExampleCss.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import TermsPolicy from "./TermsPolicy";

const inputRefs = Array.from({ length: 6 }, () => React.createRef());
let isFirstBackspaceClick = true;

function Otp(props) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const location = useLocation(props);; 
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  var authToken;
  var mobileNo;
  
  useEffect(() => {
    if(location.state === null){
      navigate("/login")
      }
    axios.get(`${apiUrl}/api/v1/user/getProfile`, {withCredentials: true})
    .then((response) => {
     navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  try {
    authToken = location.state.json.authToken;
    mobileNo = location.state.json.mobileNo;
  }
  catch(error){

  }

  const handleGoBack = () => {
    window.history.back(); // Redirects to the last page opened
  };

  const handleClick = (e) => {
    e.preventDefault();

    const otp =
      values[0] + values[1] + values[2] + values[3] + values[4] + values[5];
    console.log(otp);

    if (otp === "") {
      setErrorMessage("Please Enter the OTP that you've received");
    } else if (otp.length !== 6) {
      setErrorMessage("Enter Valid OTP");
    } else {
      let user = {
        authToken: authToken,
        otp: otp,
      };
      setLoading(true);
      setErrorMessage("");
      axios
        .post(`${apiUrl}/api/v1/user/verifyOtp`, user, {
          withCredentials: true,
        })
        .then((response) => {
          // Handle the response
          setLoading(false);
          navigate(`/`);
          console.log(response.data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
          setLoading(false);
          setErrorMessage(error.response.data.message);
        });
    }
    // navigate(`/verify`);
  };

  const handleInputChange = (index, e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    const newValues = [...values];
    newValues[index] = numericValue;
    console.log(numericValue);
    setValues(newValues);
    if (
      numericValue === "0" ||
      numericValue === "1" ||
      numericValue === "2" ||
      numericValue === "3" ||
      numericValue === "4" ||
      numericValue === "5" ||
      numericValue === "6" ||
      numericValue === "7" ||
      numericValue === "8" ||
      numericValue === "9"
    ) {
      if (e.target.value.length === 0 && index > 0) {
        inputRefs[index - 1].current.focus();
      } else if (e.target.value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (e.target.value.length === 0) {
        if (isFirstBackspaceClick) {
          isFirstBackspaceClick = false;
          e.preventDefault(); // Prevent the default backspace behavior for the first click
        } else {
          if (index > 0) {
            e.preventDefault(); // Prevent the default backspace behavior for subsequent clicks
            if (index === inputRefs.length - 1) {
              inputRefs[index - 1].current.focus();
            } else {
              inputRefs[index].current.blur();
              inputRefs[index - 1].current.focus();
            }
          }
        }
      } else {
        isFirstBackspaceClick = false;
      }
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
            <div className="BackButton">
              <label className="Back" onClick={handleGoBack}>
                {" "}
                <ArrowLeftIcon
                  sx={{
                    marginTop: "2px",
                    fontSize: 30,
                  }}
                />{" "}
                Back
              </label>
            </div>
            <div className="OFormTitle">
              Recieved a verification code?
              <label>
                We've sent an OTP to your registered mobile number {mobileNo}
                {""}. Enter the 6 digit code
              </label>
            </div> <br></br>
            <form onSubmit={handleClick}>
              <div className="ORow">
                {inputRefs.map((ref, index) => (
                  <input
                    className="OCode"
                    key={index}
                    ref={ref}
                    type="text"
                    value={values[index]}
                    maxLength="1"
                    placeholder="0"
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              {<div className="Error"> {errorMessage}</div>}
              <div className="Row">
                <label className="TC">
                  <TermsPolicy />
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
                  <input type="submit" className="Btn" value="Verify Otp" />
                )}
              </div>
            </form>
            {/* <div className="Row">
              <Link className="Link2" to="/signup">
                New to here? Create an account
              </Link>
            </div> */}
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

export default Otp;
