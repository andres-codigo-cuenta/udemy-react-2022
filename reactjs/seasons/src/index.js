// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
	module.hot.accept();
}

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Latitude: </div>
    }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));