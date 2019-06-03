import React,{Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expense : ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        this.setState({[event.target.name]:event.target.value});

    }

    render() {
        return (
            <form>
                <div>
                    <label>Add expense</label>
                    <input 
                        type="text"
                        name="expense"
                        value={this.state.expense}
                        onChange={this.handleOnChange}
                    /> &nbsp;&nbsp;
                <button>Save</button>

                </div>
            </form>
        )
    }
}

export default Form;