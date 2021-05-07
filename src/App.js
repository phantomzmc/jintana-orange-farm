import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from "./controller/main";
import Hero from "./component/hero/hero";
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* <Route path="/abount">
            <Hero />
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App;
