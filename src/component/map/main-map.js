import SimpleMap from "./map";
import './map.css';

function Maps() {
    return (
        <section id="maps">
            <div class="container">
                <div class="section-header">
                    <h3 class="cta-title">ที่ตั้งสวนส้มจินตนา 🍊</h3>
                    <p class="cta-text">แผนที่ตั้งสวน</p>
                </div>
            </div>

            <SimpleMap />
            
        </section>
    )
}

export default Maps
