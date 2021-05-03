import '../commons/common-style.css'
import './product.css'
import AOS from 'aos';
import Isotope from 'isotope-layout';
import { select, on } from "../commons/common";

function Product(params) {
    /**
   * Easy selector helper function
   */

    /**
   * Porfolio isotope and filter
   */

    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    let refresh = new AOS();
                    refresh.refresh();
                });
            }, true);
        }

    });

    /**
     * Initiate portfolio lightbox 
     */
    // const portfolioLightbox = new Glightbox({
    //     selector: '.portfolio-lightbox'
    // });

    /**
     * Portfolio details slider
     */
    // new Swiper('.portfolio-details-slider', {
    //     speed: 400,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        let init = new AOS();
        init.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
    return (
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">
                <div class="section-header">
                    <h3 class="section-title">สินค้า</h3>
                    <p class="section-description">รายการสินค้า</p>
                </div>

                <div class="row" data-aos="fade-up" data-aos-delay="100">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">ทั้งหมด</li>
                            {/* <li data-filter=".filter-4">เบอร์ 4</li> */}
                            <li data-filter=".filter-5">เบอร์ 5</li>
                            <li data-filter=".filter-6">เบอร์ 6</li>
                            <li data-filter=".filter-all">คละเบอร์</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <div class="col-lg-4 col-md-6 portfolio-item filter-5">
                        <img src={require(`../../images/no5_4.jpg`)} class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4>ส้มสายน้ำผึ้ง เบอร์ 5 40 ลูก</h4>
                            <p>ราคา : 400 บาท</p>
                            <a href="../../image/no5_4.jpg" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item filter-5">
                        <img src="../../image/no5_5.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4>ส้มสายน้ำผึ้ง เบอร์ 5 84 ลูก</h4>
                            <p>ราคา : 750 บาท</p>
                            <a href="../../image/no5_5.jpg" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-6">
                        <img src="../../image/no6_2.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4>ส้มสายน้ำผึ้ง เบอร์ 6 30 ลูก</h4>
                            <p>ราคา : 450 บาท</p>
                            <a href="../../image/no6_2.jpgG" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-6">
                        <img src="../../image/no6_3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4>ส้มสายน้ำผึ้ง เบอร์ 6 72 ลูก</h4>
                            <p>ราคา : 850 บาท</p>
                            <a href="../../image/no6_3.jpg" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Product