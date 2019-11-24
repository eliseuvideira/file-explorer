import React from 'react';
import Titlebar from './components/Titlebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="l-app">
      <Titlebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
