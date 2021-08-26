import React from 'react';
import SignUpPage from './components/LoginPage';
//import './styles/generated.css';
import './App.css'

function App() {
  return (
    <div className="signPage">
      <input 
        className="nickName"
        placeholder="mail-address"
      />
      <span className="focusLine"></span>
      <input 
        className="nickName"
        placeholder="nickname"
        />
        <span className="focusLine"></span>
      <SignUpPage />
    </div>
  );
}

export default App;
