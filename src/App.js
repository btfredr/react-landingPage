import React from "react";
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>

    </>
  );
}

export default App;
