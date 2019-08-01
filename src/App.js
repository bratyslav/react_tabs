import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';

const App = () => (
  <BrowserRouter>
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

    <Route path="/tabs/:tabTitle?" render={(props) => (
      <Tabs defaultIndex={0} {...props}/>
    )} />
  </BrowserRouter>
);

export default App;
