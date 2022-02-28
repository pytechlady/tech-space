import React from 'react'
import Button from "../component/Button";
import Human from '../assets/images/women.png';
import Banner from '../component/Banner';
import Cards from '../component/Cards';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className="container p-5 hero">
                <div className="row hero-row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h1 style={{color: "green", fontSize: "15px", lineHeight: "2.9"}}>WELCOME</h1>
                        <h2 className="mt-3" style={{color: "blue", fontSize: "25px", lineHeight: "1.2"}}>We are a group of <span style={{color: "green"}}>women</span> in</h2>
                        <h2 style={{color: "blue", fontSize: "25px", marginBottom: "30px"}}>Tech Agency.</h2>
                        <p style={{color: "blue", fontSize: "15px"}}>We make all your tech related issues seamless and easy, making your <br/>workspace relatable and organized.</p>
                       <Link to="/services">
                           <Button text="Read More" width="120px" color="#fff" backgroundColor="blue" marginTop="20px" />
                           </Link>
                        <Link to='/contact'>
                        <Button className="contact-btn" text="Contact" width="120px" color="#fff" backgroundColor="green" marginLeft="10px" marginTop="20px" />
                        </Link>
                            
                    </div>
                    <div className="col">
                        <img className="w-100" src={Human} alt="Animage"/>
                    </div>
                </div>
        </div>
        <Banner marginTop="100px"/>
        <div className="cardscomp">
        <Cards />
        <Cards heading="heading 2"/>
        <Cards heading="heading 3"/>
        </div>
     </React.Fragment>
    )
}

export default Home
