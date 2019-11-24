import React from 'react';
import './DirList.css';

function DirList() {
  return (
    <aside className="l-main__dir-list dir-list">
      <nav>
        <ul>
          <li className="dir-list__li">..</li>
          <li className="dir-list__li"><i className="icon">folder</i>assets</li>
          <li className="dir-list__li"><i className="icon">folder</i>js</li>
          <li className="dir-list__li"><i className="icon">folder</i>node_modules</li>
          <li className="dir-list__li"><i className="icon">folder</i>tests</li>
        </ul>
      </nav>
    </aside>
  );
}

export default DirList;
