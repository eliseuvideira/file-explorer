import React, { Component } from 'react';
import './DirList.css';

class DirList extends Component {
  render() {
    return (
      <aside className="l-main__dir-list dir-list">
        <nav>
          <ul>
            {this.props.directories.map((directory, index) => (
              <li key={index} className="dir-list__li" onDoubleClick={() => this.props.onDirClick(directory.path)}>
                <i className="icon">folder</i>
                {directory.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default DirList;
