import { Helmet } from "react-helmet";
import './facts.css'

function Facts(params) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>
            <section id="call-to-action">
                <div class="container">
                    <div class="row" data-aos="zoom-in">
                        <div class="col-lg-9 text-center text-lg-start">
                            <h3 class="cta-title">ส้มสายน้ำผึ้ง 🍊</h3>
                            <p class="cta-text"> เป็นพันธุ์ที่ได้รับความนิยมมากที่สุด มีลักษณะคล้ายส้มเขียวหวาน มีเนื้อแน่น สีสันสวยงาม รสชาติหวานแหลมอมเปรี้ยวเล็กน้อย มีน้ำในปริมาณมากและมีวิตามินซีสูง ช่วยบำรุงผิวพรรณให้เปล่งปลั่ง มีสารต้านอนุมูลอิสระ และช่วยเสริมสร้างระบบขับถ่ายให้ดีขึ้นอีกด้วย</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <a class="cta-btn align-middle" href="https://www.facebook.com/orangejin25" target="blank">ติดต่อสอบถาม</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Facts