import Navbar from "../Components/NavBar/Navbar";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/ContactUs/Contact";
import About from "../Pages/About/About";
import User from '../Pages/User'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/user/:userId" component={User} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
