import React, {Component} from 'react';

class Animal extends Component {

    render() {
        const cat = this.props.match.params.cat;
        const dog = this.props.match.params.dog;
        
        const url = `https://loremflickr.com/320/240/${cat}`
        return(<div>
            <h1>Animal!!!!</h1>
            <p>Show random animal images</p>

        {cat}{dog}
            <p>{this.props.cat}</p>
            <img src={url} alt={this.props.cat}/>
        </div>)
    }
}

export default Animal;