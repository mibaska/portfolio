import React from "react";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <AboutMe />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
          <Route path={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
