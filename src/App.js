import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StartPage } from './components/StartPage';

import './App.css';
 
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1> 
          </Route>
          {/* bottom one is the default route */}
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
