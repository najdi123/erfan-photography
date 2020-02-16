import React, {Component} from 'react';

import Fade from "react-reveal/Fade";

import Pulse from "react-reveal/Pulse";
import './About.css'

import ee1 from "../images/PhotographyImages/photo_2018-04-10_13-57-20.jpg";
import ee2 from "../images/PhotographyImages/photo_2018-04-10_13-57-39.jpg";
import ee3 from "../images/PhotographyImages/photo_2018-04-10_13-57-45.jpg";
import ee4 from "../images/PhotographyImages/photo_2018-04-10_13-57-50.jpg";
import ee5 from "../images/PhotographyImages/photo_2018-04-10_13-57-55.jpg";

import a6 from "../images/GraphicPageImages/JeweleryPhotography.jpg"
import a7 from "../images/GraphicPageImages/PanoramaPhotography.jpg"


class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="jumbotron">
                    <div className="container">
                        <Fade right>
                        <h6 className="name">ABOUT</h6>
                        </Fade>
                        <Fade left>
                            <p className="describe-designer">
                                My name is Erfan Askari, a freelance Photographer and Branding Consultant based in Tehran. I have over 10 years of professional work with the Iran’s leading brands and have developed more than 20 brands while collaborating with some of the best design agencies around the globe.
                                <br/>
                            </p>
                        </Fade>
                        <br/>

                        <a href="#" style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                            <p style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                                DOWNLOAD RESUME »
                            </p></a>

                    </div>
                </div>

                <div className="row">
                    <Fade right>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={ee1} alt=""/>
                        </div>
                    </Fade>
                    <Pulse>
                        <div className="col-sm-6 col-md-6 city-text">

                            <p>
                                عکاسی صنعتی به شاخه ای از عکاسی گفته می شود که وظیفه ان به نمایش گذاردن دقیق و کامل و باکیفیت محصول یا پروداکت می باشد ٬ در این شاخه از عکاسی، عکاس با استفاده از تججهیزات مناسب و انتخاب نورهای دقیق و کامل تلاش می کند تا حد امکان تصوری با کیفیت و دقیق از کالا ثبت کند که در آن تمامی خصوصیات ظاهری کالا به نمایش گذارده شود .
                            </p>
                        </div>
                    </Pulse>
                    <Pulse>
                        <div className="col-sm-6 col-md-6 city-text">

                            <p>
                                عکاسی تبلیغاتی میبایست تمام خصوصیات یک عکس حرفه‌ای را دربرگیرد و به مولفه‌های مهم دیگری نیز نیازمند است. هدف از عکاسی تبلیغاتی تنها معرفی کالا نیست بلکه تشویق و ترغیب مشتری به خرید و استفاده آن از محصول است. به بیان ساده‌تر عکس تبلیغاتی می‌بایست بیننده را به خرید کالا ترغیب کند٬ درست به مانند یک ‌تیزر‌! ‌اما‌ با‌ راه‌ و ‌روشی‌ متفاوت
                            </p>
                        </div>
                    </Pulse>
                    <Fade left>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={ee2} alt="" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={ee3} alt="" />
                        </div>
                    </Fade>
                    <Pulse>
                        <div className="col-sm-6 col-md-6 city-text">
                            <h5>Ghost mannequin</h5>
                            <p>عکاسی پوشاک شاخه‌ای از عکاسی تبلیغاتی است که در آن مد، لباس و هنر درهم آمیخته می‌شوند. جذب مخاطبان داخلی از این راه به منظور پیشی گرفتن از رقبای این صنعت امری اجتناب ناپذیراست. استودیو خانه عکس مفتخراست که حرفه‌ای‌ترین ابزارآلات ممکن و تیمی متشکل از اساتید دانشگاه‌های هنر و فارغ التحصیلان رشته های مرتبط از دانشگاه‌های معتبر را به خدمت گرفته تا خدماتی شایسته به مشتریان خود ارائه نماید. </p>
                            <p>
                                $75 per photo, flat rate
                            </p>
                        </div>
                    </Pulse>
                    <div className="col-sm-6 col-md-6 city-text">
                        <h5>Dubai, UAE</h5>
                        <p>1992 – 1995</p>
                        <p>
                            عکاسی و تصویر برداری بصورت هوایی بیش از 100 سال یعنی از زمانی که انسان توانست برای اولین بار پرواز کند و دوربین فیلمبرداری نیز اختراع گردید، قدمت دارد. این روش، در واقع دیدن و گرفتن عکس و فیلم از داخل یک وسیله پرنده و از مناظریست که از روی زمین بخوبی دیده نمی شوند. تصویربرداری هوایی چه بوسیله ماهواره باشد، چه وسایل پرنده سرنشین دار و یا وسایل پرنده بدون سرنشین، یکی از زیباترین و کاربردی ترین روشهای تصویربرداری در دنیاست تا با استفاده از تسلط هوایی بتوان شمایی کامل از پروژه ها و فعالیتها بدست آورد.
                        </p>
                    </div>
                    <Fade left>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={ee4} alt="" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={ee5} alt="" />
                        </div>
                    </Fade>
                    <div className="col-sm-6 col-md-6 city-text">
                        <h5>Staffordshire, UK</h5>
                        <p>1972 – 1992</p>
                        <p>
                            عکاسی صنعتی از فضاهای صنعتی یکی از شاخه های عکاسی صنعتی است که عموما به سفارش یک سازمان یا مجموعه صنعتی صورت می پذیرد و به ثبت فرایندهای تولیدی، اجرایی و یا ثبت تجهیزات سازمانی می پردازد. عکس صنعتی ممکن است با مقاصد داخلی ( به عنوان مثال مدیریت پروژه‌ها ) و یا خارجی ( به عنوان مثال تبلیغات یا روابط عمومی ) بکار گرفته شود
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-6 city-text">

                        <p>
                            نزدیک به نیمی از طلای دنیا نزد دولتها بصورت شمش (قطعه‌های طلا) نگه داری میشود. طلا همیشه ارزش خود را حفظ کرده است. از سال ۱۸۴۰ تا ۱۹۰۰ میلادی، هزاران نفر طی جریانی که به هجوم برای طلا یا تب طلا معروف شد، در کالیفرنیا، کلرادو، یوکون در کانادا، آفریقای جنوبی و استرالیاو از همه مهمتر جزایر هاوایی بخت خویش را برای دستیابی به طلا آزمودند.
                            عکاسی از این فلز ارزشمند، جواهر آلات و فلزات نظیر آن یکی از مهمترین و لذت‌ بخش ترین شاخه عکاسی صنعتی / هنری بشمار میرود. این شاخه از عکاسی تجربه، امکانات و تجهیزات منحصر بفردی را می‌طلبد که استدیو خانه عکس می‌تواند آنها را در اختیار مشتریان خود قراردهد.
                        </p>
                    </div>
                    <Fade left>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={a6} alt="" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-sm-6 col-md-6 city-image">
                            <img src={a7} alt="" />
                        </div>
                    </Fade>
                    <div className="col-sm-6 col-md-6 city-text">

                        <p>
                            تصاویر پانوراما به طور کلی به سه دسته تقسیم می‌شوند:

                            پانوراما عریض (عموما با جابجایی دوربین): که می‌تواند از چندین عکس به هم پیوسته در عرض تشکیل شود و قابلیت پرینت بر روی کاغذ را دارد.
                            پانوراما ۳۶۰ درجه و کمتر (نام دیگر:افقی)(عموما با چرخاندن دوبین): این نوع پانوراما در عرض به صورت ۳۶۰ درجه با گرفتن چندین عکس تشکیل می‌شود به طوری که اگر در عرض تصویر را ادامه بدهید می‌توانید همه قسمتهای عکس گرفته شده را مشاهده کنید. تصور کنید که در جایی ایستاده و در عرض دور سر خود می‌چرخید و همه جای محل ایستادن خود را مشاهده می‌کنید.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;