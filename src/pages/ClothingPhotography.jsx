import React from 'react';
import {Link} from "react-router-dom";
import './LightBox.css';
import Lightbox from 'react-image-lightbox';


import pic1 from "../images/PhotographyImages/Clothing/01.jpg";
import pic2 from "../images/PhotographyImages/Clothing/02.jpg";
import pic3 from "../images/PhotographyImages/Clothing/03.jpg";
import pic4 from "../images/PhotographyImages/Clothing/04.jpg";
import pic5 from "../images/PhotographyImages/Clothing/05.jpg";
import pic6 from "../images/PhotographyImages/Clothing/06.jpg";
import pic7 from "../images/PhotographyImages/Clothing/07.jpg";
import pic8 from "../images/PhotographyImages/Clothing/08.jpg";
import pic9 from "../images/PhotographyImages/Clothing/09.jpg";
import pic10 from "../images/PhotographyImages/Clothing/010.jpg";
import pic11 from "../images/PhotographyImages/Clothing/011.jpg";
import pic12 from "../images/PhotographyImages/Clothing/012.jpg";
import pic13 from "../images/PhotographyImages/Clothing/013.jpg";
import pic14 from "../images/PhotographyImages/Clothing/014.jpg";
import pic15 from "../images/PhotographyImages/Clothing/015.jpg";
import pic16 from "../images/PhotographyImages/Clothing/016.jpg";
import pic17 from "../images/PhotographyImages/Clothing/017.jpg";
import pic18 from "../images/PhotographyImages/Clothing/018.jpg";
import pic19 from "../images/PhotographyImages/Clothing/019.jpg";
import pic20 from "../images/PhotographyImages/Clothing/020.jpg";
import pic21 from "../images/PhotographyImages/Clothing/021.jpg";
import pic22 from "../images/PhotographyImages/Clothing/022.jpg";
import pic23 from "../images/PhotographyImages/Clothing/023.jpg";
import pic24 from "../images/PhotographyImages/Clothing/024.jpg";
import pic25 from "../images/PhotographyImages/Clothing/025.jpg";
import pic26 from "../images/PhotographyImages/Clothing/026.jpg";
import pic27 from "../images/PhotographyImages/Clothing/027.jpg";
import pic28 from "../images/PhotographyImages/Clothing/028.JPG";
import pic29 from "../images/PhotographyImages/Clothing/029.jpg";
import pic30 from "../images/PhotographyImages/Clothing/030.jpg";
import pic31 from "../images/PhotographyImages/Clothing/031.jpg";
import pic32 from "../images/PhotographyImages/Clothing/032.jpg";
import pic33 from "../images/PhotographyImages/Clothing/033.jpg";
import pic34 from "../images/PhotographyImages/Clothing/034.jpg";
import pic35 from "../images/PhotographyImages/Clothing/035.jpg";
import pic36 from "../images/PhotographyImages/Clothing/036.jpg";






const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36];

class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }



    render() {
        var width = window.innerWidth;
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
                                        <Link className="nav-link" to="/Photography/LocationPhotography">
                                            عکاسی محیطی
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/Photography/ClothingPhotography">
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

                    <img src={pic1} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img src={pic2} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img src={pic3} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img src={pic4} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />

                    <img src={pic5} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img src={pic6} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img src={pic7} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img src={pic8} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img src={pic9} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img src={pic10} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img src={pic11} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img src={pic12} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img src={pic13} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img src={pic14} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img src={pic15} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />
                    <img src={pic16} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />
                    <img src={pic17} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />
                    <img src={pic18} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />
                    <img src={pic19} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img src={pic20} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img src={pic21} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />
                    <img src={pic22} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img src={pic23} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img src={pic24} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />
                    <img src={pic25} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />
                    <img src={pic26} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />
                    <img src={pic27} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:26 })} />
                    <img src={pic28} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:27 })} />
                    <img src={pic29} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:28 })} />
                    <img src={pic30} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:29 })} />
                    <img src={pic31} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:30 })} />
                    <img src={pic32} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:31 })} />
                    <img src={pic33} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:32 })} />
                    <img src={pic34} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:33 })} />
                    <img src={pic35} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:34 })} />
                    <img src={pic36} className="thumbnail"  alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:35 })} />




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