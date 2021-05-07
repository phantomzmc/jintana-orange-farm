import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import AbountMe from '../component/abount/abount'
import Product from '../component/product/product'
import Hero from '../component/hero/hero'
import Header from '../component/header/header'
import Facts from '../component/facts/facts'
import Content from '../component/content/content'
import Maps from '../component/map/main-map'
import '../App.css'

function Main() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Helmet>
            <Header />
            <Hero />
            <div className="content">
                <AbountMe />
                <Facts />
                <Product />
                <Maps />
                <Content />
            </div>
            <footer id="footer">
                <div class="container">
                    <div class="copyright">&copy; Copyright <strong>Jintana Orange Farm</strong>. All Rights Reserved</div>
                    <div class="credits">
                        Designed by <a href="#">Jintana Orange Farm</a>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Main