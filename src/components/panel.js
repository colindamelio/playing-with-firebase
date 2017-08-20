import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { details } = this.props;

    return (
      <div className="panel-details">
        <p>{details}</p>
      </div>
    )
  }
}

export default Panel;
