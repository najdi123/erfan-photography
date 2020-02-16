import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import pic from '../images/optimized-studio-wide-1500x630.jpg';
import Fade from "react-reveal/Fade";
import './Home.css';



class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <img src={pic}  alt="Product photography photo studio"   className="about-pic" />
                <div className=" contact">
                    <Fade right>
                        <h2 className="contact"><i className="fas fa-phone"></i>  0912 358 35 62</h2>
                        <h2 className="contact" ><i className="fas fa-envelope-open"></i> erfan.askari89@gmail.com</h2>
                    </Fade>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
