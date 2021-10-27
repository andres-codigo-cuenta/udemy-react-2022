import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should produce some HTML
if (module.hot) {
	module.hot.accept();
}

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
	<App />, document.querySelector('#root')
);