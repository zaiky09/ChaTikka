import React from 'react';
import NavBar from './NavBar';
//import SignUp from './SignUp';
//import Login from './Login';
import HomePage from './HomePage';
import FoodList from './FoodList';
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
