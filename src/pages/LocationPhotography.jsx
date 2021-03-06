import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
import 'react-image-lightbox/style.css';


import pic1 from "../images/PhotographyImages/Location/pic  (1).jpg";
import pic2 from "../images/PhotographyImages/Location/pic  (2).jpg";
import pic3 from "../images/PhotographyImages/Location/pic  (3).jpg";
import pic4 from "../images/PhotographyImages/Location/pic  (4).jpg";
import pic5 from "../images/PhotographyImages/Location/pic  (5).jpg";
import pic6 from "../images/PhotographyImages/Location/pic  (6).jpg";
import pic7 from "../images/PhotographyImages/Location/pic  (7).jpg";
import pic8 from "../images/PhotographyImages/Location/pic (1).jpeg";
import pic9 from "../images/PhotographyImages/Location/pic (2).jpeg";
import pic10 from "../images/PhotographyImages/Location/pic (3).jpeg";
import pic11 from "../images/PhotographyImages/Location/pic (4).jpeg";
import pic12 from "../images/PhotographyImages/Location/pic (5).jpeg";
import {Link} from "react-router-dom";





const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];


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
                    <nav className="navbar navbar-expand-sm   sticky">
                        <div className="">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <div className="toggler-icon"></div>
                                <div className="toggler-icon"></div>
                                <div className="toggler-icon"></div>
                            </button>

                            <div className="collapse navbar-collapse" id="mobile-nav">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/LifeStylePhotography">
                                            لایف استایل
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/FoodPhotography">
                                            غذا و خوراکی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/ChildrenPhotography">
                                            کودک
                                        </Link>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link className="nav-link" to="/Photography/CarPhotography">*/}
                                    {/*        Car*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/pngPhotography">
                                            png عکاسی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/IndustrialPhotography">
                                            عکاسی صنعتی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/AerialPhotography">
                                            عکاسی هوایی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/FamousFaces">
                                            سلبریتی ها
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  active" to="/Photography/LocationPhotography">
                                            عکاسی محیطی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Photography/ClothingPhotography">
                                            لباس و مدلینگ
                                        </Link>
                                    </li>
                                    <li className="hr">

                                    </li>
                                </ul>

                                <ul className="navbar-nav ml-auto go-right">
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/contact">
                                            تماس با ما
                                        </Link>
                                    </li>
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/about">
                                            درباره
                                        </Link>
                                    </li>
                                    <li className="nav-item go-right">
                                        <Link className="nav-link" to="/">
                                            خانه
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
                    <img src={pic7} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img src={pic8} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img src={pic9} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img src={pic10} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img src={pic11} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img src={pic12} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />






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