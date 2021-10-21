import Navbar from "../Components/NavBar/Navbar";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/ContactUs/Contact";
import About from "../Pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
