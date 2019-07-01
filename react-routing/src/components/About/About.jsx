import React, {Component} from 'react';

class About extends Component {

    render() {
        return(<div>
            <h1>About!</h1>
            <p>Hey {this.props.name} Welcome to this website</p>
        </div>)
    }
}

export default About;