import React, {Component} from 'react';
import Remove from './Delete';


class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        console.log(this.props)
        return(<div>
            <p>{this.props.text}</p><Remove />
        </div>)
    }
}

export default Expense;