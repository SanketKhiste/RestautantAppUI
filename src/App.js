import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './views/Customer';
import MainUI from './views/MainUI';
import SignUpForm from './views/SignUpForm';
import LoginForm from './views/LoginForm';
import ForgetPassword from './views/ForgetPassword';

function App() {
  return (
    <div className="App">
      {/* <Customer/> */}
      {/* <MainUI/> */}
      {/* <SignUpForm/> */}
      {/* <LoginForm/> */}
      <BrowserRouter>
      {/* <Appheader></Appheader> */}
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/SignUpForm' element={<SignUpForm/>}></Route>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}></Route>
        {/* <Route path='/customer' element={<Customer/>}></Route> */}
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
