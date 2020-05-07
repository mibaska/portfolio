import React from "react";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Nav from "./components/Nav";
import AntiNav from "./components/AntiNav";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AboutMe />
      <Nav />
      <Switch>
        <Route exact path={["/", "/aboutme"]} component={AboutMe} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/portfolio"} component={Portfolio} />
      </Switch>
      <AntiNav />
    </BrowserRouter>
  );
}

export default App;
