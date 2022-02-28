import React from 'react';
import TheLogo from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className="col d-flex align-items-end">
                        <img src={TheLogo} alt="theLogo"/>
                        <p className="text-light ms-2">TechSpace</p>
              </div>
  )
}

export default Logo