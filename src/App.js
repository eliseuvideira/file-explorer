import React, { Component } from 'react';
import Titlebar from './components/Titlebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    currentPath: '',
  };

  componentDidMount() {
    ipcRenderer.send('GET /current-path');
    ipcRenderer.on('GET /current-path', (event, currentPath) => {
      this.setState({ currentPath });
    });
  }

  changePath = (currentPath) => {
    this.setState({ currentPath });
  };

  render() {
    if (!this.state.currentPath) {
      return <div></div>;
    }
    return (
      <div className="l-app">
        <Titlebar path={this.state.currentPath} />
        <Main path={this.state.currentPath} onChangePath={this.changePath} />
        <Footer />
      </div>
    );
  }
}

export default App;
