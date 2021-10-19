import Navbar from "../Components/NavBar/Navbar";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";
import About from "../Pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
