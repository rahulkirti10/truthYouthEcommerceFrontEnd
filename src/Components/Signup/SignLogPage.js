import React from 'react'
import "../../Css files/SLForm.css"
import SignUp from './SignUp'
import LogIn from './LogIn'
import Otp from './Otp'

function SignLogPage() {
  return (
    <div className='SLPage'>

      <div className='SLBox'>

        <div className='SLBoxLeft'>
        <div className='LeftTop'>
        <img src='../Images/cloud-image.png' height="100%" width="50%"  alt='logo'/>
        </div>

        <Otp />
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