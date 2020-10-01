import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import Dashbord from './Components/Dashbord'
import AdminDashBord from "./Components/AdminDashBord"
import BookInCart from './Components/BookInCart';
import OrderSummery from './Components/OrderSummery';
import WishList from './Components/WishList'
import {ProtectedRoute} from './Components/Protected.route';


function App() {
  return (
   
  
    <div className="App">
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/Login" component={SignIn} />
        <Route  exact path="/home/books" component={Dashbord} />
        <Route exact path="/adminDashboard" component={AdminDashBord} />
        <ProtectedRoute exact path="/home/books/bookInCart" component={BookInCart} />
        <ProtectedRoute exact path="/home/books/wishlist" component={WishList} />
        <ProtectedRoute exact path="/home/books/orderSummery" component={OrderSummery} />
        {/* <Route path="*" component={()=>"404 not found"}/> */}
        </Router>
    </div>
    
  );
}

export default App;
