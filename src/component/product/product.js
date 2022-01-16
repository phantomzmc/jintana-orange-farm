import { Helmet } from "react-helmet";

import '../commons/common-style.css'
import './product.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Isotope from 'isotope-layout';
// import * as Swiper from 'swiper';
import * as Glightbox from 'glightbox';
import { select, on } from "../commons/common";

function Product() {
    /**
   * Easy selector helper function
   */
    /**
   * Porfolio isotope and filter
   */
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
        AOS.refresh();
        return () => {
            console.log("return data")
        }
    }, []);
    // window.addEventListener('load', () => {
    //     let portfolioContainer = select('.portfolio-container');
    //     if (portfolioContainer) {
    //         let aos = new AOS()
    //         let portfolioIsotope = new Isotope(portfolioContainer, {
    //             itemSelector: '.portfolio-item',
    //             layoutMode: 'fitRows'
    //         });

    //         let portfolioFilters = select('#portfolio-flters li', true);

    //         on('click', '#portfolio-flters li', function (e) {
    //             e.preventDefault();
    //             portfolioFilters.forEach(function (el) {
    //                 el.classList.remove('filter-active');
    //             });
    //             this.classList.add('filter-active');

    //             portfolioIsotope.arrange({
    //                 filter: this.getAttribute('data-filter')
    //             });
    //             portfolioIsotope.on('arrangeComplete', function () {
    //                 aos.refresh();
    //             });
    //         }, true);
    //     }

    // });

    /**
     * Portfolio details slider
     */
    // swiper = new Swiper('.portfolio-details-slider', {
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




    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>

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
                            <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_4.jpg" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>ส้มสายน้ำผึ้ง เบอร์ 5 40 ลูก</h4>
                                <p>ราคา : 449 บาท</p>
                                <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_4.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 portfolio-item filter-5">
                            <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>ส้มสายน้ำผึ้ง เบอร์ 5 84 ลูก</h4>
                                <p>ราคา : 790 บาท</p>
                                <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-6">
                            <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_2.JPG" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>ส้มสายน้ำผึ้ง เบอร์ 6 30 ลูก</h4>
                                <p>ราคา : 499 บาท</p>
                                <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_2.JPG" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-6">
                            <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_3.JPG" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>ส้มสายน้ำผึ้ง เบอร์ 6 72 ลูก</h4>
                                <p>ราคา : 899 บาท</p>
                                <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_3.JPG" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Product