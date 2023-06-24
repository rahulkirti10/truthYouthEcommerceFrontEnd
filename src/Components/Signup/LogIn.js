import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  
  const navigate = useNavigate();
  const clickLink = (option) => {
    navigate(`/registeration?option=${option}`);
  };


  return (
    <div className='LForm'>
          
          <div className='One'>
            <img src='../Images/coral.png' height="80%" width="90%" alt='logo'/>
          </div>

          <div className='Two'>
            <label>LogIn to your account</label>
            <div className='Text'>
            <input className='Code' type="text" placeholder="+91" readOnly/>
            <input className='Input' type="text" placeholder='Enter Mobile Number'/>        
            </div>    
          </div>
          
          <div className='Three'>

          <label className='TC'>By continuing, you agree to our <Link className='New2'>Terms of use</Link> and <Link className='New2'>Privacy Policy</Link></label>
          <Link className='Btn' to="/verify">Request OTP</Link>
          <label className='New'  onClick={() => clickLink("SignIn")}>New to here? Create an account</label>
          </div>

    </div>
  )
}

export default LogIn