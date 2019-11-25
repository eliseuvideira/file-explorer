import React, { Component } from 'react';
import './Titlebar.css';

const { ipcRenderer } = window.require('electron');

class TitleBar extends Component {
  state = {
    isMaximized: false,
  };

  close = (event) => {
    event.preventDefault();
    ipcRenderer.send('close');
  };

  minimize = (event) => {
    event.preventDefault();
    ipcRenderer.send('minimize');
  };

  maximize = (event) => {
    event.preventDefault();
    ipcRenderer.send('maximize');
    this.setState({ isMaximized: true });
  };

  restore = (event) => {
    event.preventDefault();
    ipcRenderer.send('restore');
    this.setState({ isMaximized: false });
  };

  render() {
    return (
      <header className="l-app__titlebar titlebar">
        <span className="titlebar__path">
          /home/eliseu/nodejs/file-explorer
        </span>
        <span className="titlebar__btn" onClick={this.minimize}>
          _
        </span>
        {this.state.isMaximized ? (
          <span className="titlebar__btn" onClick={this.restore}>
            ⊠
          </span>
        ) : (
          <span className="titlebar__btn" onClick={this.maximize}>
            ◻
          </span>
        )}
        <span className="titlebar__btn" onClick={this.close}>
          ×
        </span>
      </header>
    );
  }
}

export default TitleBar;
