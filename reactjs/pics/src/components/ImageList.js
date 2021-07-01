import React from 'react';

import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner';

const ImageList = (props) => {
    const images = props.images.map(({ id, urls, description}) => {
        return <img key={ id } src={ urls.regular } alt={ description } />;
    });

    return (
        <div className="ui segment" style={{ minHeight: 720 + 'px' }}>
            <Spinner message="Searching for images" display={ props.displaySpinner } />
            { images }
        </div>
    );
    
};

export default ImageList;