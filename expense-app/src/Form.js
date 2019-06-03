import React,{Component} from 'react';
import uuid from 'uuid';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text : ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event){
        this.setState({[event.target.name]:event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();
        const newExpense = {...this.state, id: uuid()};
        this.props.create(newExpense);
        this.setState({
            text:''
        });
    }

    render() {
        const enabled = this.state.text;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Add expense</label>
                    <input 
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    /> &nbsp;&nbsp;
                    <button disabled={!enabled}>add</button>

                </div>
            </form>
        )
    }
}

export default Form;