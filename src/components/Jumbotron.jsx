import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import './Jumbotron.css'
import p7 from "../images/PhotographyImages/Clothing/06.jpg";
import Navbar from "./Navbar";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron transparent home-bg">
                <Navbar/>
                <div className="container">
                    <br className="margin-bottom"/>
                    {/*<img src={p7} alt=""/>*/}
                    {/*<Flash>*/}
                    {/*    <h6 className="name farsi3">عرفان عسکری</h6>*/}
                    {/*</Flash>*/}
                </div>
                <div className="home-footer-container">
                    <p className="home-footer foot">Erfan Askari</p>
                    <p className="home-footer foot2">STUDIO</p>
                    <p className="home-footer mt-2 p-2 foot3">Copyright&#169; Erfan Askari Studio.All rights reserved.</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;