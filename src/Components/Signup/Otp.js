import React from 'react';
import { Link } from 'react-router-dom';

const inputRefs = Array.from({ length: 6 }, () => React.createRef());
let isFirstBackspaceClick = true;

function Otp() {
  const handleInputChange = (index, e) => {
    if (e.target.value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (e.target.value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
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
    <div className='OForm'>
      <div className='One'>
        <img src='../Images/coral.png' height='80%' width='90%' alt='Logo' />
      </div>

      <div className='Two'>
        <label className='Heading'>Recieve a Verification Code?</label>
        <label className='Subheading'>We've sent an OTP on your registered Mobile No. 8010xxxxxx. Enter the 6 digit code</label>
        <div className='Text'>
          {inputRefs.map((ref, index) => (
            <input
             className='Code'
              key={index}
              ref={ref}
              type='text'
              maxLength='1'
              placeholder='_'
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>  
      </div>

      <div className='Three'>
        <label className='TC'>
          By continuing, you agree to our{' '}
          <Link className='New2'>Terms of use</Link> and{' '}
          <Link className='New2'>Privacy Policy</Link>
        </label>
        <Link className='Btn'>Continue</Link>
        <Link className='New'>New to here? Create an account</Link>
      </div>
    </div>
  );
}

export default Otp;
