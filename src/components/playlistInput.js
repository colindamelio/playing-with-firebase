import React, { Component } from 'react';

class PlayListInput extends Component {
  render() {

    const { onChange, onSubmit } = this.props;

    return (
      <form className="playlist-input" onSubmit={onSubmit}>
        <input type="text" name="artist" placeholder="Artist" onChange={onChange} />
        <input type="text" name="album" placeholder="Album Name" onChange={onChange} />
        <input type="text" name="song" placeholder="Song Title" onChange={onChange} />
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default PlayListInput;
