import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { details, removeItem } = this.props;

    return (
      <div>
        {details.map(item => {
          return (
            <div className="panel-details" key={item.id}>
              <button className="remove" onClick={() => {removeItem(item.id)}}>X</button>
              <span>{item.artist}</span>
              <span className="album">{item.album}</span>
              <span>{item.song}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Panel;
