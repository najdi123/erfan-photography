import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-toggleable header sticky">
                <Fade top>
                    <div className="container">
                        <Link className="navbar-brand" to="/"><h1 className="header2">erfan.PHOTOGRAPHY</h1></Link>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Fade>
            </nav>

        );
    }
}

export default Navbar;

