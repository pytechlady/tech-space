import React from 'react'
import Human from '../assets/images/women.png';
import Banner from '../component/Banner';
import Cards from '../component/Cards';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <div className="container p-5" style={{height: "760px"}}>
                <div className="row" style={{paddingTop: "250px"}}>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h1 style={{color: "green", fontSize: "15px", lineHeight: "2.9"}}>WELCOME</h1>
                        <h2 className="mt-3" style={{color: "blue", fontSize: "25px", lineHeight: "1.2"}}>We are a group of <span style={{color: "green"}}>women</span> in</h2>
                        <h2 style={{color: "blue", fontSize: "25px", marginBottom: "30px"}}>Tech Agency.</h2>
                        <p style={{color: "blue", fontSize: "15px"}}>We make all your tech related issues seamless and easy, making your <br/>workspace relatable and organized.</p>
                       <Link to="/services"><button style={{width: "120px", marginBottom: "30px"}} type="button" class="btn btn-primary mt-3">Read more</button></Link>
                        <Link to='/contact'><button style={{width: "120px", marginBottom: "30px"}} type="button" class="btn btn-success mt-3 ms-2">Contact Us</button></Link>
                            
                    </div>
                    <div className="col">
                        <img className="w-100" src={Human} alt="Animage"/>
                    </div>
                </div>
        </div>
        <Banner />
        <Cards/>
     </React.Fragment>
    )
}

export default Home
