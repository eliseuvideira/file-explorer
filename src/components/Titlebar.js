import React from 'react';
import './Titlebar.css';

function Header() {
  return (
    <header className="l-app__titlebar titlebar">
      <span className="titlebar__path">/home/eliseu/nodejs/file-explorer</span>
      <a className="titlebar__btn"></a>
      <a className="titlebar__btn is-hidden"></a>
      <a className="titlebar__btn"></a>
      <a className="titlebar__btn"></a>
    </header>
  );
}

export default Header;
