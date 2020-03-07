import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import './Jumbotron.css'
import p7 from "../images/PhotographyImages/Clothing/06.jpg";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron transparent home-bg">
                <div className="container">
                    <br className="margin-bottom"/>
                    {/*<img src={p7} alt=""/>*/}
                    <Flash>
                        <h6 className="name farsi3">عرفان عسکری</h6>
                    </Flash>
                </div>
            </div>
        );
    }
}

export default Jumbotron;