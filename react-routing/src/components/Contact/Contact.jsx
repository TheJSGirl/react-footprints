import React, {Component} from 'react';

class Contact extends Component {

    render() {
        return(<div>
            <h1>Contact!!</h1>
            <p>Welcome to {this.props.country}</p>
        </div>)
    }
}

export default Contact;