import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from "react-reveal/Fade";
import './Gallery.css'


import p3 from "../images/PhotographyImages/Children/pic-(1).jpg";
import p4 from "../images/PhotographyImages/car/003.jpg";

import p6 from "../images/PhotographyImages/Location/pic  (5).jpg";
import p7 from "../images/PhotographyImages/Clothing/06.jpg";

import p9 from "../images/PhotographyImages/pic (9).jpg";

import p11 from "../images/PhotographyImages/Industrial/02.jpg";

import p13 from "../images/PhotographyImages/Food/pic-(32).jpg";

// import p15 from "../images/PhotographyImages/Food/pic-(25).jpg";

import p17 from "../images/PhotographyImages/pic (14).jpg";
import p18 from "../images/PhotographyImages/pic (15).jpg";
import p19 from "../images/PhotographyImages/pic (16).jpg";
// import p20 from "../images/PhotographyImages/pic (17).jpg";
// import Clothing from "../pages/ClothingPhotography";


class Gallery extends Component {
    render() {
        return (
            <div className="row portfolio">
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/FoodPhotography">
                            <div className="img__wrap thumbnail">

                                <img className="img__img" src={p13} alt="آلبوم عکس غذا و رستوران" />

                                <div className="img__description">
                                    <div className="m-center">

                                        <h5>This album contains photos of foods, edibles and restaurants  </h5>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Food Photography Album</p>*/}
                        <p className="farsi1 pt-1"> آلبوم غذا و خوراکی </p>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ClothingPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p7} alt="آلبوم عکس لباس و مدلینگ" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album includes photos of out-door modeling, clothing and accessories</h5>
                                    </div>
                                </div>
                            </div>


                        {/*<p >Clothing/Modeling Photography Album</p>*/}
                        <p className="farsi1 pt-1">آلبوم لباس و مدلینگ</p>
                        </Link>
                    </div>
                </Fade>

                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/IndustrialPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p11} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Industrial Photography</p>*/}
                        <p className="farsi1 pt-1">آلبوم عکاسی صنعتی </p>
                    </div>
                </Fade>


                {/*<Fade right>*/}
                    {/*<div className="col-sm-12 col-md-6 col-lg-4 pax">*/}
                        {/*<Link to="/Photography/DecorativeProducts">*/}
                            {/*<div className="img__wrap thumbnail">*/}
                                {/*<img className="img__img" src={p20} alt="" />*/}
                                {/*<div className="img__description">*/}
                                    {/*<div className="m-center">*/}
                                        {/*<h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</Link>*/}
                        {/*<p >Decorative products Photography Album</p>*/}
                    {/*</div>*/}
                {/*</Fade>*/}
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ChildrenPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p3} alt="آلبوم عکس از کودکان و نوجوانان" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album includes photos of children and youth </h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Children Photography Album</p>*/}
                        <p className="farsi1 pt-1">آلبوم کودک</p>
                    </div>
                </Fade>



                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/pngPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p19} alt="آلبوم عکس از محصولات صنعتی با پس زمینه سفید مناسب برای کاتالگ و وبسایت" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4>This album contains sharp images of products with white background, suitable for web and catalog usage </h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >PNG Photography Album</p>*/}
                        <p className="farsi1 pt-1">png آلبوم عکاسی </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/FamousFaces">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p17} alt="آلبوم عکس از شخصیتهای معروف مثل بازیگران سینمایی و بازیکنان فوتبال و خواننده" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album contains photos of known and famous characters such as actors and actresses, singers and football players</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Famous faces Photography Album</p>*/}
                        <p className="farsi1 pt-1">آلبوم سلبریتی ها</p>
                    </div>
                </Fade>
                {/*<Fade bottom>*/}
                    {/*<div className="col-sm-12 col-md-6 col-lg-4 pax">*/}
                        {/*<div className="img__wrap thumbnail">*/}
                            {/*<img className="img__img" src={p15} alt="" />*/}
                            {/*<div className="img__description">*/}
                                {/*<div className="m-center">*/}
                                    {/*<h4>This album contains interior, exterior photos of restaurant spaces and atmosphere </h4>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<p >Restaurant space Photography </p>*/}
                    {/*</div>*/}
                {/*</Fade>*/}
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/AerialPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p18} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album is pictures taken from quadcopters and drones from above</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Aerial Photography and Filming</p>*/}
                        <p className="farsi1 pt-1">آلبوم عکاسی و فیلم برداری هوایی </p>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LocationPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p6} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album includes photos of out-door modeling, clothing and accesories</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Location Photography Album</p>*/}
                        <p className="farsi1 pt-1">آلبوم عکاسی محیطی </p>
                    </div>
                </Fade>

                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LifeStylePhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p9} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album contains photos of people in different situations such as events or sports</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/*<p >Lifestyle Photography Album</p>*/}
                        <p className="farsi1 pt-1">لایف استایل</p>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/CarPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p4} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4>This album contains still and moving photos of cars and other vehicles interior and exterior </h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Vehicle Photography Album</p>
                    </div>
                </Fade>
            </div>


        );
    }
}

export default Gallery;