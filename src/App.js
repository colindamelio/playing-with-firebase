import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from './firebase.js';
import PlayListInput from './components/playlistInput.js';
import Panel from './components/panel.js';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			loading: true,
			artist: '',
			album: '',
			song: '',
			music: [],
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	componentDidMount() {
    this.loadingState();
		this.handleDataRetreival();
	}

  loadingState() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

	handleDataRetreival() {
		// takes snapshot of what currently exists in the DB
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', snapshopt => {
			let items = snapshopt.val();
			let updatedState = [];

			for (let item in items) {
				updatedState.push({
					artist: items[item].artist,
					album: items[item].album,
					song: items[item].song,
					id: item
				});
			}

			this.setState({
				music: updatedState
			});
		});
	}

	handleFormChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');
		const item = {
			artist: this.state.artist,
			album: this.state.album,
			song: this.state.song
		};

		itemsRef.push(item);

		this.setState({
			artist: '',
			album: '',
			song: ''
		});
	}

	removeItem(itemId) {
		const itemsRef = firebase.database().ref(`items/${itemId}`);
		itemsRef.remove();
	}

	render() {
		const { loading } = this.state;
		return !loading
			? <div className="App">
					<PlayListInput
            artist={this.state.artist}
            album={this.state.album}
            song={this.state.song}
						onSubmit={this.handleFormSubmit}
						onChange={this.handleFormChange}
					/>
					<div className="panel">
						<Panel
              details={this.state.music}
              removeItem={this.removeItem} />
					</div>
				</div>
			: null;
	}
}

App.propTypes = {
  loading: PropTypes.bool,
  music: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  arist: '',
  album: '',
  song: '',
};

export default App;
