import React, {Component} from 'react';
import './ImageCard.css';

class ImageCard extends Component {
    
     render() {
         const {description, urls} = this.props.image;
        return (
            <div>
                <img className="image" alt={description}
                src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
