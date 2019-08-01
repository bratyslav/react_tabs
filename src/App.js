import React from 'react';
import './App.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';

const App = () => (
  <HashRouter>
    <nav>
      <NavLink
        to="/"
        exact
        activeClassName="nav-link__is-active"
        className="nav-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        activeClassName="nav-link__is-active"
        className="nav-link"
      >
        Tabs
      </NavLink>
    </nav>

    <Route path="/" exact component={Home} />

    <Route path="/tabs/:tabId?" render={(props) => (
      <Tabs {...props}/>
    )} />
  </HashRouter>
);

export default App;
