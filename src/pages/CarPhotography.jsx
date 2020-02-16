import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
import 'react-image-lightbox/style.css';


import pic1 from "../images/PhotographyImages/car/001.jpg";
import pic2 from "../images/PhotographyImages/car/003.jpg";
import pic3 from "../images/PhotographyImages/car/004.jpg";
import pic4 from "../images/PhotographyImages/car/005.jpg";
import pic5 from "../images/PhotographyImages/car/006.jpg";
import pic6 from "../images/PhotographyImages/car/007.jpg";
import {Link} from "react-router-dom";
// import pic7 from "../images/PhotographyImages/car/010.jpg";
// import pic8 from "../images/PhotographyImages/car/011.jpg";
// import pic9 from "../images/PhotographyImages/car/12.jpg";
// import pic10 from "../images/PhotographyImages/car/013.jpg";
// import pic11 from "../images/PhotographyImages/car/015.jpg";
// import pic12 from "../images/PhotographyImages/car/016.jpg";
// import pic13 from "../images/PhotographyImages/car/017.jpg";





const images = [pic1, pic2, pic3, pic4, pic5, pic6];
//
// const images = [
//     '../images/01.jpg',
//     '../images/02.jpg',
//     '../images/03.jpg'
// ];

class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div >

                <div >
                    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="mobile-nav">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/LifeStylePhotography">
                                        Lifestyle
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/FoodPhotography">
                                        Food
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/ChildrenPhotography">
                                        Children
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Photography/CarPhotography">
                                        Car
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/pngPhotography">
                                        png
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/IndustrialPhotography">
                                        Industrial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/AerialPhotography">
                                        Aerial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/FamousFaces">
                                        Famous Faces
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/LocationPhotography">
                                        Location
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/ClothingPhotography">
                                        Clothing
                                    </Link>
                                </li>
                                    <li className="hr">

                                    </li>
                            </ul>

                                <ul className="navbar-nav ml-auto go-right">
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>

                        </div>


                        </div>
                    </nav>
                </div>


                {!isOpen &&
                <div className="image-display">

                    <img src={pic1} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img src={pic2} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img src={pic3} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img src={pic4} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />

                    <img src={pic5} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img src={pic6} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />






                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;