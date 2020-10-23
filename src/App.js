import React from 'react';
import './App.css';
import Amiibo from './Amiibo/Amiibo'
import Header from './Header/header'
import ButtonAppBar from './Bar/ButtonAppBar'


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Header/>
      <Amiibo/>
    </div>
  );
}

export default App;
