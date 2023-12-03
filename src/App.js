import React from 'react';
import logo from './logo.svg';
import './App.css';
import  InputForm  from './components/common/InputForm';
import Footer from './components/common/Footer';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <SignupPage/>
      <Footer/>
    </div>

  );
}

export default App;
