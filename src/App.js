import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
      <switch>
        <Route path="/checkout">
        <Header />
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Header />
          <Home/>
        </Route>
      </switch>
    </div>
    </Router>
  );
}

export default App;