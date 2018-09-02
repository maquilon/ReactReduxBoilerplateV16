import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Header from './header';
import Footer from './footer';

const App = () => (
  <React.Fragment>
    <Header />
    <div style={{ paddingTop: 70 }} >

      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />

    </div>
    <Footer />
  </React.Fragment>
);

export default App;