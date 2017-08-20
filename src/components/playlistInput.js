import React, { Component } from 'react';

class PlayListInput extends Component {
  render() {

    const { onChange, onSubmit } = this.props;

    return (
      <form className="playlist-input" onSubmit={onSubmit}>
        <input type="text" name="artist" placeholder="Artist" onChange={onChange} required/>
        <input type="text" name="album" placeholder="Album Name" onChange={onChange} />
        <input type="text" name="song" placeholder="Song Title" onChange={onChange}  required/>
        <div className="button-wrapper">
          <button type="submit">submit</button>
        </div>
      </form>
    )
  }
}

export default PlayListInput;
