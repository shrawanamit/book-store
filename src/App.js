import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import Dashbord from './Components/Dashbord'
import AdminDashBord from "./Components/AdminDashBord"
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/store'

function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Dashbord} />
        <Route exact path="/admin_home" component={AdminDashBord} />
        </Router>
    </div>
    </Provider>
  );
}

export default App;
