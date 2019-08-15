import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./components/Schedule";
import GetInvolved from "./pages/GetInvolved";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/schedule/' component={Schedule} />
        <Route path='/getinvolved' component={GetInvolved} />
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
