import { Helmet } from "react-helmet";

import SimpleMap from "./map";
import MapsBox from "./map-box";
import './map.css';

function Maps() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>
            <section id="maps">
                <div class="container">
                    <div class="section-header">
                        <h3 class="cta-title">ที่ตั้งสวนส้มจินตนา 🍊</h3>
                        <p class="cta-text">แผนที่ตั้งสวน</p>
                    </div>
                    <div class="mapsbox">
                        <MapsBox />
                    </div>
                </div>

                {/* <SimpleMap /> */}

            </section>
        </div>

    )
}

export default Maps
