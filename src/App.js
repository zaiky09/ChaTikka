import React from 'react';
import NavBar from './components/navbar/NavBar';
//import SignUp from './SignUp';
//import Login from './Login';
import HomePage from './components/herosection/HomePage';
import FoodList from './components/foodlist/FoodList';
//import Search from './Search';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <FoodList/>
    </div>
  );
}

export default App;
