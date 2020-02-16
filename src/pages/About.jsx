import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import pic from '../images/optimized-studio-wide-1500x630.jpg';
import Fade from "react-reveal/Fade";
import './Home.css';
import {Link} from "react-router-dom";




class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <img src={pic}   alt="Product photography photo studio"  className="about-pic" />
                <div className="container">
                    <Fade left>
                        <p className="about-erf">
                            My name is Erfan Askari, a freelance Photographer and Branding Consultant based in Tehran. I have over 12 years of professional work with the Iran’s leading brands and have developed more than 20 brands while collaborating with some of the best design agencies around the globe.
                            <br/>

                            {/*<i href="https://www.facebook.com/erfan.photography" className="fab fa-facebook ml-auto" ></i>*/}
                            {/*<i className="fab fa-instagram ml-auto"></i>*/}
                            {/*<i className="fab fa-twitter ml-auto"></i>*/}
                        </p>
                    </Fade>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
