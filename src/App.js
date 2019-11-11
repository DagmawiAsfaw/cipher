import React from 'react';
import logo from './logo.svg';
import './App.sass';
import TitleBar from "./components/TitleBar/titlebar.component";
import Encrypt from "./components/Encrypt/encrypt.component";
function App() {
  return (
    <div className="App">
      <div className='main'>
        <TitleBar/>
        <Encrypt/>
      </div>
    </div>
  );
}

export default App;
