import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import Dashbord from './Components/Dashbord'
import AdminDashBord from "./Components/AdminDashBord"

import BookInCart from './Components/BookInCart';
import OrderSummery from './Components/OrderSummery';
import WishList from './Components/WishList'
import {MyForm} from './Components/Form'



function App() {
  return (
   

    <div className="App">
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/Login" component={SignIn} />
        <Route  path="/home/books" component={Dashbord} />
        <Route exact path="/adminDashboard" component={AdminDashBord} />
        <Route  exact path="/bookInCart" component={BookInCart} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/orderSummery" component={OrderSummery} />
        <Route exact path="/form" component={MyForm} />
        
        </Router>
    </div>
    
   
  );
}

export default App;
