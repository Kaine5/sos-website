import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import GetInvolved from "./pages/GetInvolved";
import Navbar from "./layout/Navbar";
import Hamburger from "./layout/Hamburger";
import { Helmet } from 'react-helmet';

const App = () => {
  const [hideNav, setHideNav] = React.useState(true);

  const openNav = () => {
    setHideNav(!hideNav);
  };
  return (
    <div>
      <Helmet>
        <title>Schools of Startups</title>
        <meta name="description" content="School of Startups is a two-day event/conference organized by The Shortcut." />
      </Helmet>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/schedule/" component={Schedule} />
        <Route path="/getinvolved" component={GetInvolved} />
        <Hamburger openNav={openNav} />

        <Navbar hideNav={hideNav} openNav={openNav} />
      </Router>
    </div>
  );
};

export default App;
