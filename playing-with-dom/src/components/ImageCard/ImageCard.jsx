import React, {Component} from 'react';
import './ImageCard.css';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }
     render() {
         const {description, urls} = this.props.image;
        return (
            <div>
                <img ref={this.imageRef} className="image" alt={description}
                src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
