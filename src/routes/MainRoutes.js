import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../views/LoginForm';
import SignUpForm from '../views/SignUpForm';
import ForgetPassword from '../views/ForgetPassword';
import Header from '../layouts/header/header';
import RestaurantForm from '../views/RestaurantForm';

const MainRoutes = () => {
  return (
    <div>
        <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
        <Route path='/SignUpForm' element={<SignUpForm/>}></Route>{/*Customer Registration */}
        <Route path='/ForgetPassword' element={<ForgetPassword/>}></Route>
        <Route path='/RestaurantForm' element={<RestaurantForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRoutes