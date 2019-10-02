import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import GetInvolved from "./pages/GetInvolved";
import Navbar from "./layout/Navbar";
import Hamburger from "./layout/Hamburger";
import { Helmet } from "react-helmet";

const App = () => {
  const [hideNav, setHideNav] = React.useState(true);

  const openNav = () => {
    setHideNav(!hideNav);
  };
  return (
    <div>
      <Helmet>
        <title>Schools of Startups</title>
        <meta
          name='description'
          content='School of Startups (SoS) is a two-day event in Helsinki for startup doers planning on scaling and for talent eager to improve their employability. Filled with 40 workshops covering business, tech, and design topics given by startup doers, SoS is one of the best in Helsinki startup events scene to bring together startup pros, experts and enthusiasts to one platform.'
        />
        <meta
          name='keywords'
          content='School of Startups, SoS, Helsinki startup events, The Shortcut SoS, Business, Design, Tech'
        />
        <meta property='og:title' content='School of Startups' />
        <meta property='og:image' content='/img/sos-background.png' />
        <meta
          property='og:description'
          content='School of Startups (SoS) is a two-day event in Helsinki for startup doers planning on scaling and for talent eager to improve their employability. Filled with 40 workshops covering business, tech, and design topics given by startup doers, SoS is one of the best in Helsinki startup events scene to bring together startup pros, experts and enthusiasts to one platform.'
        />
        <meta property='og:url' content='https://schoolofstartups.net/' />
      </Helmet>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/schedule/' component={Schedule} />
        <Route path='/getinvolved' component={GetInvolved} />
        <Hamburger openNav={openNav} />

        <Navbar hideNav={hideNav} openNav={openNav} />
      </Router>
    </div>
  );
};

export default App;
