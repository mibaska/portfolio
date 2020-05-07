import React from "react";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/aboutme"]} component={AboutMe} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/portfolio"} component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
