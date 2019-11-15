import React from 'react';

const ImageCard = (props) => {

    return (
        <div>
            <img alt={props.image.decription} src={props.image.urls.regular} />
        </div>
        )

}

export default ImageCard;