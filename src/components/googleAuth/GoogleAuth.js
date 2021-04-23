import React from 'react';
import GoogleAuthStyled from './GoogleAuthStyled'
import logo from '../../assets/images/googleIcon.png'

const GoogleAuth = () => {
    return (
      <GoogleAuthStyled>
        <a href='http://localhost:5000/api/auth/google' className='googleBtn'>
          <img src={logo} alt='googleIcon' className='googleIcon' />Google
        </a>
      </GoogleAuthStyled>
    )
}

export default GoogleAuth