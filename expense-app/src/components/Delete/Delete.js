import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Delete.css';
import { remove } from '../../actions/settings';

class Delete extends Component {

    render() {
        const { id } = this.props;
    return(
        <button  onClick={() => this.props.remove(id)} className="btn"><i class="far fa-trash-alt">Delete</i></button>
    )
    }
}

export default connect(null, {remove})(Delete);
