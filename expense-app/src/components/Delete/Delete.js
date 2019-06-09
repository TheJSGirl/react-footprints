import React, {Component} from 'react';
import './Delete.css';

class Delete extends Component {

    render() {
    return(
        <button  onClick={this.props.remove} className="btn"><i class="far fa-trash-alt">Delete</i></button>
    )
    }
}

export default Delete;