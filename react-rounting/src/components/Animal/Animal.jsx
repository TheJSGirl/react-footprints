import React, {Component} from 'react';

class Animal extends Component {

    render() {
    const url = `https://loremflickr.com/320/240/${this.props.name}`
        return(<div>
            <h1>Animal!!!!</h1>
            <p>Show random animal images</p>
            <p>{this.props.name}</p>
            <img src={url} alt={this.props.name}/>
        </div>)
    }
}

export default Animal;