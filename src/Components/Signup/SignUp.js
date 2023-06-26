import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../Css files/SLForm.css";
import axios from "axios";

function SignUp() {
  const apiUrl = process.env.REACT_APP_API_URL;
  

  const [inputValues, setInputValues] = useState(["", ""]);
  const [number, setNumber] = useState('');
  const handleInputChange = (e,index, value) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setNumber(numericValue);
    if(numericValue >='0' && numericValue <='9'){
      handleContact(index, value);
    }
  };

  const handleInputChangeName = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const navigate = useNavigate();
  function handleContact(index, value){
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

    let user = {
      fullName: inputValues[1],
      mobileNo: inputValues[0],
    };
    console.log("Button clicked with value:", inputValues);
    console.log(`${apiUrl}/api/v1/user/signup`);
    axios
      .post(`${apiUrl}/api/v1/user/signup`, user)
      .then((response) => {
        // Handle the response
        navigate(`/verify?authToken=${response.data.data}`);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
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
            <form onSubmit={handleClick}>
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
