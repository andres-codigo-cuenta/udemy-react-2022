import './ImageList.css'
import React from 'react';

import "semantic-ui-css/semantic.min.css";
import Spinner from '../Spinner/Spinner';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard key={ image.id } image={ image } />;
	});

	return (
		<div className="ui segment image-list" style={{ minHeight: 720 + 'px' }}>
			<Spinner message="Searching for images" display={ props.displaySpinner } />
			{ images }
		</div>
	);
};

export default ImageList;