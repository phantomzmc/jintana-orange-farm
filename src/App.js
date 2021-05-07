import AbountMe from './component/abount/abount'
import Product from './component/product/product'
import Hero from './component/hero/hero'
import Header from './component/header/header'
import Facts from './component/facts/facts'
import Content from './component/content/content'
import Maps from './component/map/main-map'
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
        <Maps />
        <Content />
      </div>
      <MessengerCustomerChat
        pageId="100214885291937"
        appId="264316655429529"
      />
      <footer id="footer">
        <div class="footer-top">
          <div class="container">

          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>Jintana Orange Farm</strong>. All Rights Reserved
      </div>
          <div class="credits">
            Designed by <a href="#">Jintana Orange Farm</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
