import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './header.css';
import * as AOS from 'aos';
import { select, on } from "../commons/common";


const Header = () => {
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
    useEffect(() => {
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select('#navbar .scrollto', true)
        const navbarlinksActive = () => {
            let position = window.scrollY + 200
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return
                let section = select(navbarlink.hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active')
                } else {
                    navbarlink.classList.remove('active')
                }
            })
        }
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let header = select('#header')
            let offset = header.offsetHeight

            if (!header.classList.contains('header-scrolled')) {
                offset -= 20
            }

            let elementPos = select(el).offsetTop
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            })
        }

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select('#header')
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled')
                } else {
                    selectHeader.classList.remove('header-scrolled')
                }
            }
            window.addEventListener('load', headerScrolled)
            onscroll(document, headerScrolled)
        }

        /**
         * Back to top button
         */
        let backtotop = select('.back-to-top')
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active')
                } else {
                    backtotop.classList.remove('active')
                }
            }
            window.addEventListener('load', toggleBacktotop)
            onscroll(document, toggleBacktotop)
        }

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function (e) {
            select('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        })

        /**
         * Mobile nav dropdowns activate
         */
        on('click', '.navbar .dropdown > a', function (e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on('click', '.scrollto', function (e) {
            if (select(this.hash)) {
                e.preventDefault()

                let navbar = select('#navbar')
                if (navbar.classList.contains('navbar-mobile')) {
                    navbar.classList.remove('navbar-mobile')
                    let navbarToggle = select('.mobile-nav-toggle')
                    navbarToggle.classList.toggle('bi-list')
                    navbarToggle.classList.toggle('bi-x')
                }
                scrollto(this.hash)
            }
        }, true)

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash)
                }
            }
        });
        /**
         * Animation on scroll
         */
        return () => {
            console.log("aos.init")
        }
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>
            <header id="header" class="fixed-top d-flex align-items-center header-transparent">
                <div class="container d-flex justify-content-between align-items-center">

                    <div id="logo">
                        <h1>JINTANA ORANAGE</h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">หน้าแรก</a></li>
                            <li><a className="nav-link scrollto" href="#about">เกี่ยวกับ</a></li>
                            {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                            <li><a className="nav-link scrollto " href="#portfolio">สินค้า</a></li>
                            {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                            <li><a className="nav-link scrollto" href="#maps">แผนที่</a></li>
                            <li><a className="nav-link scrollto" href="#contact">ติดต่อสอบถาม</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>


    )
}

export default Header