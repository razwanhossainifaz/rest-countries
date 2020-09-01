import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = "/name/:countryName">
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = '*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
