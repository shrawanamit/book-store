import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/signin" component={SignIn} />
        </Router>
    </div>
  );
}

export default App;
