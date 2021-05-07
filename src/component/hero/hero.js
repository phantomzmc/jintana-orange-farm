import { Helmet } from "react-helmet";
import './hero.css'

function Hero(params) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>
            <section id="hero">
                <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Jintana Orange Farm</h1>
                    <h2>ส้มสายน้ำผึ้ง อำเภอฝาง จังหวัดเชียงใหม่ รสชาติหวานเก็บสดทุกวัน</h2>
                    <a href="#about" class="btn-get-started">เยี่ยมชมสวน</a>
                </div>
            </section>
        </div>

    )

}

export default Hero