import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './views/Customer';
import MainUI from './views/MainUI';
import SignUpForm from './views/SignUpForm';
import LoginForm from './views/LoginForm';
import ForgetPassword from './views/ForgetPassword';
import MainRoutes from './routes/MainRoutes';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '././layouts/header/ThemeProvider';

function App() {
  return (
    // <div className="App">
    //   <MainRoutes/>
    // </div>
    <ThemeProvider>
    <CssBaseline /> {/* This will apply default Material UI styles */}
    <MainRoutes/>
      {/* Your other components go here */}
    </ThemeProvider>
  );
}

export default App;
