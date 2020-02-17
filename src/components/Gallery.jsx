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
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ClothingPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p7} alt="آلبوم عکس لباس و مدلینگ" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album includes photos of out-door modeling, clothing and accessories</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس هایی از پوشاک همراه مدل
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p className="hide">Clothing/Modeling Photography Album</p>
                            <p className="farsi1 pt-1">آلبوم لباس و مدلینگ</p>
                        </Link>
                    </div>

                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/IndustrialPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p11} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس هایی از محصولات تولیدی مثل عطر، لوازم آرایشی، جواهرات، مبل، کیف و کفش
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p className="hide">Industrial Photography</p>
                            <p className="farsi1 pt-1">آلبوم عکاسی صنعتی </p>
                        </Link>
                    </div>
                </Fade>

                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/pngPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p19} alt="آلبوم عکس از محصولات صنعتی با پس زمینه سفید مناسب برای کاتالگ و وبسایت" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album contains sharp images of products with white background, suitable for web and catalog usage </h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس هایی دقیق از محصولات با پشت زمینه سفید مناسب برای وب سایت و کاتالوگ
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p className="hide">PNG Photography Album</p>
                            <p className="farsi1 pt-1">PNG آلبوم عکاسی </p>
                        </Link>
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
                        <Link to="/Photography/FamousFaces">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p17} alt="آلبوم عکس از شخصیتهای معروف مثل بازیگران سینمایی و بازیکنان فوتبال و خواننده" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album contains photos of known and famous characters such as actors and actresses, singers and football players</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس های مدلینگ افراد معروف مثل بازیگران، خواننده و فوتبالیست ها
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p className="hide">Famous faces Photography Album</p>
                            <p className="farsi1 pt-1">آلبوم سلبریتی ها</p>
                        </Link>
                    </div>
                </Fade>



                <Fade left>

                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/FoodPhotography">
                            <div className="img__wrap thumbnail">

                                <img className="img__img" src={p13} alt="آلبوم عکس غذا و رستوران" />

                                <div className="img__description">
                                    <div className="m-center">

                                        <h4 className="hide">This album contains photos of foods, edibles and restaurants  </h4>
                                        <h4 className="farsi2">آلبوم شامل عکس هایی از انواع خوراکی و غذا مثل آبمیوه، نوشیدنی گرم، دسر، سبزیجات، میوه، صبحانه، ساندویچ و پیتزا </h4>

                                    </div>
                                </div>

                            </div>
                            <p className="hide">Food Photography Album</p>
                            <p className="farsi1 pt-1"> آلبوم غذا و خوراکی </p>
                        </Link>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ChildrenPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p3} alt="آلبوم عکس از کودکان و نوجوانان" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album includes photos of children and youth </h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس هایی از کودکان
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p className="hide">Children Photography Album</p>
                            <p className="farsi1 pt-1">آلبوم کودک</p>
                        </Link>
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
                                        <h4 className="hide">This album is pictures taken from quadcopters and drones from above</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس های هوایی از بالا یا توسط پهباد
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        <p className="hide">Aerial Photography and Filming</p>
                        <p className="farsi1 pt-1">آلبوم عکاسی و فیلم برداری هوایی </p>
                        </Link>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LocationPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p6} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album includes photos of out-door modeling, clothing and accesories</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس هایی از رستوران ها، فضاهای صنعتی و خط تولید
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        <p className="hide">Location Photography Album</p>
                        <p className="farsi1 pt-1">آلبوم عکاسی محیطی </p>
                        </Link>
                    </div>
                </Fade>

                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LifeStylePhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p9} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4 className="hide">This album contains photos of people in different situations such as events or sports</h4>
                                        <h4 className="farsi2">
                                            آلبوم شامل عکس های ورزشی و لایف استایل
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        <p className="hide">Lifestyle Photography Album</p>
                        <p className="farsi1 pt-1">لایف استایل</p>
                        </Link>
                    </div>
                </Fade>

                {/*<Fade bottom>*/}
                {/*    <div className="col-sm-12 col-md-6 col-lg-4 pax">*/}
                {/*        <Link to="/Photography/CarPhotography">*/}
                {/*            <div className="img__wrap thumbnail">*/}
                {/*                <img className="img__img" src={p4} alt="" />*/}
                {/*                <div className="img__description">*/}
                {/*                    <div className="m-center">*/}
                {/*                        <h4>This album contains still and moving photos of cars and other vehicles interior and exterior </h4>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Link>*/}
                {/*        <p >Vehicle Photography Album</p>*/}
                {/*    </div>*/}
                {/*</Fade>*/}
            </div>


        );
    }
}

export default Gallery;