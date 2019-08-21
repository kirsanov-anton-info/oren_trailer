/*jshint esversion: 6 */

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Content/Header/Header';
import Home from './Content/Home/Home';
import Catalogue from './Content/Catalogue/Catalogue';
import Partners from './Content/Partners/Partners';
import About from './Content/About/About';

class App extends React.Component {
  render() {
    return (
      <Router>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/catalogue/" component={Catalogue} />
          <Route path="/partners/" component={Partners} />
          <Route path="/about/" component={About} />
          <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" />
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="true" />
          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true" />
          <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
      </Router>
    );
  }
}

export default App;
