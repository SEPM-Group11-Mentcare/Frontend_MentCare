import React from 'react';
import './App.css';
import  InputForm  from './components/common/InputForm';
import Footer from './components/common/Footer';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <SigninPage/> */}
      {/* <SignupPage/> */}
      <LandingPage/>
      <Footer/>
    </div>

  );
}

export default App;
