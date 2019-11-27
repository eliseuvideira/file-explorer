import React, { Component } from 'react';
import DirList from './DirList';
import FileList from './FileList';
import './Main.css';

const { ipcRenderer } = window.require('electron');

class Main extends Component {
  state = {
    directories: [],
    files: [],
  };

  getDirectories = () => {
    ipcRenderer.send('GET /directories', this.props.path);
    ipcRenderer.on('GET /directories', (event, directories) => {
      this.setState({ directories });
    });
  };

  getFiles = () => {
    ipcRenderer.send('GET /files', this.props.path);
    ipcRenderer.on('GET /files', (event, files) => {
      this.setState({ files });
    });
  };

  componentDidMount() {
    this.getDirectories();
    this.getFiles();
  }

  componentDidUpdate(props) {
    if (props.path !== this.props.path) {
      this.getDirectories();
      this.getFiles();
    }
  }

  changeDir = (dir) => {
    this.props.onChangePath(dir);
  };

  render() {
    return (
      <div className="l-app__main l-main">
        <DirList
          directories={this.state.directories}
          onDirClick={this.changeDir}
        />
        <FileList files={this.state.files} />
      </div>
    );
  }
}

export default Main;
