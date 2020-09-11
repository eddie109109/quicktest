import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <section>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
