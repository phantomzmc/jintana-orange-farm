import AbountMe from './component/abount/abount'
import Product from './component/product/product'
import Hero from './component/hero/hero'
import Header from './component/header/header'
import Facts from './component/facts/facts'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Hero />

      <div className="content">
        <AbountMe />
        <Facts />        
        <Product />
      </div>
      <footer id="footer">
    <div class="footer-top">
      <div class="container">

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Regna</strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
    </div>
  );
}
export default App;
