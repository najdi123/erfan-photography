import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import './Jumbotron.css'

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <Flash>
                        <h6 className="name">ERFAN ASKARI</h6>
                    </Flash>
                    <Fade left>
                        <p className="describeNew">
                            Freelance Photographer and Branding Consultant based in
                            Tehran.
                        </p>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default Jumbotron;