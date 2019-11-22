import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {

    return (
        <div>
            <img className="image" alt={props.image.decription} src={props.image.urls.regular} />
        </div>
        )

}

export default ImageCard;