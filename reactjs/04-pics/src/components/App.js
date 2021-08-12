import React from 'react';
import unsplash from '../api/unsplash';

import '../sass/App.scss';

import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

class App extends React.Component {
	state = { spinner: false, images: [] };

	onSearchSubmit = async (term) => {
		this.setState({ spinner: true, images: [] });
		
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		
		this.setState({ spinner: false, images: response.data.results });
	}

	render() {
		return(
			<div className="ui container" style={{ marginTop: 10 + 'px' }}>
				<SearchBar onSubmit={ this.onSearchSubmit }/>
				<ImageList displaySpinner={ this.state.spinner } images={ this.state.images } />
			</div>
		);   
	}
}

export default App;