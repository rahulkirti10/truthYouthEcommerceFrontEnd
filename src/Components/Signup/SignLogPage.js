import React from 'react'
import "../../Css files/SLForm.css"
import SignUp from './SignUp'
import LogIn from './LogIn'

function SignLogPage() {
  return (
    <div className='SLPage'>

      <div className='SLBox'>

        <div className='SLBoxLeft'>
          <LogIn />
        </div>

        <div className='SLBoxRight'>    
       
        </div>

      </div>

    </div>
  )
}

export default SignLogPage