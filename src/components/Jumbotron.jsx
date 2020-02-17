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
                        <h6 className="name farsi3">عرفان عسکری</h6>
                    </Flash>
                    <Fade right>
                        <p className="describeNew">
                            عکاس و مشاور برندینگ و دیجیتال مارکتینگ
                        </p>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default Jumbotron;