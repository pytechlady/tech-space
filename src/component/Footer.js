import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import SocialAccounts from './SocialAccounts';
import TheLogo from '../assets/images/logo.svg';


const Footer = ({ listStyleType, backgroundColor}) => {
    const style = {
        listStyleType: listStyleType ? listStyleType : "none",
        backgroundColor: backgroundColor ? backgroundColor : "#4c6b9f"
    }
    return (
            <footer className="p-5" style={style}>
                <div className="container">
                    <div className="footer">
                    <img className="mb-3" src={TheLogo} alt="theLogo"/>
                    <ul style={style} className="footer-list">
                        <div>
                        <Link className="links" to="/">
                        <li>Home</li>
                        </Link>
                        </div>
                        <div>
                        <Link className="links" to="services">
                        <li>Services</li>
                        </Link>
                        </div>
                        <div>
                        <Link className="links" to="contact">
                        <li>Contact</li>
                        </Link>
                        </div>
                    </ul>
                    <p className="footer-para">TechSpace is an organization of women in Tech, our goal is to make all your tech 
                        related issues seamless and easy, making your workspace relatable and organized. </p>
                        <SocialAccounts/>
                    <h6 className="mt-5">&copy;TechSpace 2022</h6>
                    </div>
           </div>
    </footer>
    )
}

export default Footer
