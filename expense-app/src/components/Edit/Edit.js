import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Delete/Delete.css';
import {updatedTask} from '../../actions/settings';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing : false,
            editedText: this.props.text,
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleToggle() {
        this.setState({isEditing: true})
    }
    handleChange(evt) {
        this.setState({editedText: evt.target.value});

    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updatedTask(this.props.id, this.state.editedText)
        this.setState({isEditing: false})
    }


    render() {
        let result;
        if(this.state.isEditing) {
            result = <div>
                <form onSubmit={this.handleUpdate}>
                     <input type="text" onChange={this.handleChange} 
                     value={this.state.editedText} name="editedText" required="true"/>
                     <button>Save</button>
                </form>
            </div>
        } 
        else{
        result = <button  onClick={this.handleToggle} className="btn">Edit</button>
        }
        return result;
    }
    
}

export default connect(null, {updatedTask})(Edit);
