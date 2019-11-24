import React from 'react';
import './FileList.css';

function FileList() {
  return (
    <main className="l-main__file-list file-list">
      <nav>
        <ul>
          <li className="file-list__li file-list__head">
            <span className="file-list__li__name">Name</span>
            <span className="file-list__li__size">Size</span>
            <span className="file-list__li__time">Modified</span>
          </li>
          <li className="file-list__li file-list__head">
            <span className="file-list__li__name">index.html</span>
            <span className="file-list__li__size">1.71 KB</span>
            <span className="file-list__li__time">11/24/2019, 18:47:31</span>
          </li>
          <li className="file-list__li file-list__head">
            <span className="file-list__li__name">package.json</span>
            <span className="file-list__li__size">539 B</span>
            <span className="file-list__li__time">11/24/2019, 18:32:12</span>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default FileList;
