import React from 'react';

const Spinner = (props) => {
	return (
		<div className={`ui dimmer ${ props.display === true ? 'active' : 'hidden' }`}>
			<div className="ui big text loader">{ props.message }</div>
		</div>
	);
};

Spinner.defaultProps = {
	message: 'Loading...'
}

export default Spinner;