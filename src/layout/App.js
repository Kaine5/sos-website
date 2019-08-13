import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import GetInvolved from "./GetInvolved";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/schedule/" component={Schedule} />
        <Route path="/getinvolved" component={GetInvolved} />
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
