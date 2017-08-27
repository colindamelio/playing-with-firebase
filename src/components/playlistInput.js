import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayListInput extends Component {
  render() {

    const { onChange, onSubmit, artist, album, song } = this.props;

    return (
      <form className="playlist-input" onSubmit={onSubmit}>
        <input value={artist} type="text" name="artist" placeholder="Artist" onChange={onChange} required/>
        <input value={album} type="text" name="album" placeholder="Album Name" onChange={onChange} />
        <input value={song} type="text" name="song" placeholder="Song Title" onChange={onChange}  required/>
        <button type="submit">submit</button>
      </form>
    )
  }
}

PlayListInput.propTypes = {
  artist: PropTypes.string,
  album: PropTypes.string,
  song: PropTypes.string,
}

export default PlayListInput;
