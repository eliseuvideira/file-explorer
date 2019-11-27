import React from 'react';
import prettyBytes from 'pretty-bytes';
import moment from 'moment';
import './FileList.css';

function FileList({ files }) {
  return (
    <main className="l-main__file-list file-list">
      <nav>
        <ul>
          <li className="file-list__li file-list__head">
            <span className="file-list__li__name">Name</span>
            <span className="file-list__li__size">Size</span>
            <span className="file-list__li__time">Modified</span>
          </li>
          {files.map((file) => (
            <li key={file.name} className="file-list__li file-list__head">
              <span className="file-list__li__name">{file.name}</span>
              <span className="file-list__li__size">
                {prettyBytes(file.stats.size)}
              </span>
              <span className="file-list__li__time">
                {moment(file.stats.mtime).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default FileList;
