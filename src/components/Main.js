import React from 'react';
import DirList from './DirList';
import FileList from './FileList';
import './Main.css';

function Main() {
  return (
    <div className="l-app__main l-main">
      <DirList />
      <FileList />
    </div>
  );
}

export default Main;
