import React, { Component } from 'react';
import firebase from './firebase.js';
import PlayListInput from './components/playlistInput.js';
import Panel from './components/panel.js';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      artist: '',
      album: '',
      song: '',
      music: [],
    }

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  componentDidMount() {
    this.handleDataRetreival();
  }

  handleDataRetreival() {
    // takes snapshot of what currently exists in the DB
    const itemsRef = firebase.database().ref('items');
    console.log('item', itemsRef);
    itemsRef.on('value', (snapshopt) => {
      let items = snapshopt.val();
      let updatedState = [];

      for (let item in items) {
        updatedState.push({
          artist: items[item].artist,
          album: items[item].album,
          song: items[item].song,
          id: item,
        })
      };

      this.setState({
        music: updatedState,
      })
    })
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      artist: this.state.artist,
      album: this.state.album,
      song: this.state.song,
    }
    itemsRef.push(item);
    this.setState({
      artist: '',
      album: '',
      song: '',
    })
  }

  removeItem(itemId) {
    const itemsRef = firebase.database().ref(`items/${itemId}`);
    itemsRef.remove();
  }

  render() {
    return (
      <div className="App">
        <PlayListInput onSubmit={this.handleFormSubmit} onChange={this.handleFormChange} />
        <div className="panel">

          {this.state.music.map( item => {
            return (
              <Panel key={item.id} details={this.state.music} />
            )
          })}

        </div>
      </div>
    );
  }
}

export default App;

/* <div className="panel">
  {this.state.music.map((item, i) => {
    return (
      <div className="panel-details" key={item.id}>
        <button
          className="remove"
          onClick={() => {this.removeItem(item.id)}}>X</button>
        <span>{item.artist}</span>
        <span className="album">{item.album}</span>
        <span>{item.song}</span>
      </div>
    )
  })}
</div> */
