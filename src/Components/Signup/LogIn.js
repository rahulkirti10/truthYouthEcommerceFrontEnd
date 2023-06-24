import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../Css files/SLForm.css"

function LogIn() {
  
  const navigate = useNavigate();
  const clickLink = () => {
    navigate(`/signup`);
  };


  return (
    <div className='SLPage'>

    <div className='SLBox'>

      <div className='SLBoxLeft'>
      <div className='LeftTop'>
      <img src='../Images/cloud-image.png' height="100%" width="50%"  alt='logo'/>
      </div>

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
          <label className='New'  onClick={() => clickLink()}>New to here? Create an account</label>
          </div>

    </div>

    </div>

<div className='SLBoxRight'>  

<div className='RightTop'>
<img src='../Images/24493638_6941053.svg' height="100%" width="80%"  alt='logo'/>
</div>

<div className='RightDown'>
<img src='../Images/cloud-image.png' height="100%" width="100%"  alt='logo'/>
</div>  

</div>

</div>

</div>
  )
}

export default LogIn