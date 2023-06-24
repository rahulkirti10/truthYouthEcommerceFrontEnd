import React, { useEffect } from 'react'
import "../../Css files/SLForm.css"
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './SignUp'
import LogIn from './LogIn'
import Otp from './Otp'

function SignLogPage(props) {

  const [isSign, setIsSign] = useState(null);

  const location = useLocation(props);
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('option');

  useEffect(() => {
    if(category === "SignIn")
    {setIsSign(true);}
    else{setIsSign(false);}
  },[])

  return (
    <div className='SLPage'>

      <div className='SLBox'>

        <div className='SLBoxLeft'>
        <div className='LeftTop'>
        <img src='../Images/cloud-image.png' height="100%" width="50%"  alt='logo'/>
        </div>
        {isSign ? (<SignUp />) : (<LogIn />)}
        </div>

        <div className='SLBoxRight'>  

        <div className='RightTop'>
        <img src='../Images/24493638_6941053.png' height="100%" width="80%"  alt='logo'/>
        </div>

        <div className='RightDown'>
        <img src='../Images/cloud-image.png' height="100%" width="100%"  alt='logo'/>
        </div>  
       
        </div>

      </div>

    </div>
  )
}

export default SignLogPage