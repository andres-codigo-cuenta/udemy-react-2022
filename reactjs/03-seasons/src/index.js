// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

if (module.hot) {
	module.hot.accept();
}

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        //// NOTE
        // Good place to do data-loading!
        ////

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        //// NOTE
        // Good place to do more data-loading when state/props change
        ////
        console.log('My component was just updated - it rendered!')
    }

    componentWillUnmount() {
        //// NOTE
        // Good place to do clean-up (especially for non-React stuff)
        ////
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Please accept location request" />;
    }

    // Must be defined
    render() {
        //// NOTE
        // Avoid doing anything besides returning JSX
        ////
        
        return (
            <div className="ui fluid container">
                { this.renderContent() }
            </div>
        )
    }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));