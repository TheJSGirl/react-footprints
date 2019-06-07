import React, {Component} from 'react';

class Animal extends Component {

    render() {
        const name = this.props.match.params.name;
        
        const url = `https://loremflickr.com/320/240/${name}`
        return(<div>
            <h1>Animal!!!!</h1>
            <p>Show random animal images</p>
            <p>{this.props.name}</p>
            <img src={url} alt={this.props.name}/>
        </div>)
    }
}

export default Animal;