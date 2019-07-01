import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class AnimalSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({query:evt.target.value})
    }


    render() {
        return(<div>
            <h1>Search for an animal</h1>
            <input 
                type="text"
                placeholder="search for an animal"
                value={this.state.query}
                onChange = {this.handleChange}
            />
            <Link to={`/animal/${this.state.query}`}>Go!</Link>

        </div>)
    }
}

export default AnimalSearch;