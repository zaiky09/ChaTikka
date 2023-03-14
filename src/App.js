import React from 'react';
//import NavBar from './components/navbar/NavBar';
//import SignUp from './SignUp';
//import Login from './Login';
import LandingPage from './components/landingpage/LandingPage';
//import HomePage from './components/herosection/HomePage';
import CheckOut from './components/checkout/CheckOut';
import Order from './components/order/Order';
//import FoodList from './components/foodlist/FoodList';
//import Search from './Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/herosection/HomePage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        {/* <HomePage/> */}
        {/* <NavBar/> */}
        <Routes>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/order" element={<Order/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
