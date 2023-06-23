import React from 'react'
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className='SLForm'>
          
          <div className='One'>
            <img src='../Images/coral.png' height="80%" width="90%" />
          </div>

          <div className='Two'>
            <label>Login to your account</label>
            <div className='Text'>
            <input className='Code' type="text" placeholder="+91" readOnly/>
            <input className='Input' type="text" placeholder='Enter Mobile Number'/>        
            </div>    
          </div>
          
          <div className='Three'>

          <label className='TC'>By continuing, you agree to our <Link className='New2'>Terms of use</Link> and <Link className='New2'>Privacy Policy</Link></label>
          <Link className='Btn'>Request OTP</Link>
          <Link className='New'>New to here? Create an account</Link>
            
          </div>

    </div>
  )
}

export default LogIn