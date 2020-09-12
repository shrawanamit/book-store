import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import Dashbord from './Components/Dashbord'
import AdminDashBord from "./Components/AdminDashBord"
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import BookInCart from './Components/BookInCart'

function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/adminLogin" component={SignIn} />
        <Route exact path="/userLogin" component={SignIn} />
        <Route exact path="/userDashBord" component={Dashbord} />
        <Route exact path="/bookInCart" component={BookInCart} />
        <Route exact path="/adminDashBord" component={AdminDashBord} />
        </Router>
    </div>
    </Provider>
  );
}

export default App;
