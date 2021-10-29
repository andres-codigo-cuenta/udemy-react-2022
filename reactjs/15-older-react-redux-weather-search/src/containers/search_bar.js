import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecase in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all the reducers
	return bindActionCreators({ fetchWeather }, dispatch);
}

// Promote SearchBar from a component to a container - it needs to know about
// this new dispatch method, selectBook.  Make it available as a prop
export default connect(null, mapDispatchToProps)(SearchBar);