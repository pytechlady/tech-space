import React from 'react'
import Logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer className="p-5" style={{backgroundColor: "#4c6b9f"}}>
                <div class="container">
                <div class="row row-cols-4">
                    <div class="col d-flex align-items-center">
                        <img src={Logo} alt="theLogo"/>
                        <p className="text-light ms-2">TechSpace</p>
                    </div>
                    <div class="col text-light">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Newsletter</p>
                        <p>Our Academy</p>
                    </div>
                    <div class="col text-light">
                        <p>Priorities</p>
                        <p>Success story</p>
                        <p>Community services</p>
                        <p>Team</p>
                    </div>
                    <div class="col">

                    </div>
                </div>
           </div>
    </footer>
        </div>
    )
}

export default Footer
