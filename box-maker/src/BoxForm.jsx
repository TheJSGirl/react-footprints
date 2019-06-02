import React, {Component} from 'react';
import Box from './Box';

class BoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
            width: '',
            color: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleOnchange.bind(this);
    }

    handleOnchange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit() {
        
    }

    render() {
        return (
            <div>
                <form onClick={this.handleSubmit}>

                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleOnchange}
                    /><br/>

                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleOnchange}
                    />
                    <br/>
                    <label htmlFor="color">Color</label>
                    <input
                        id="color"
                        value={this.state.color}
                        name="color"
                        onChange={this.handleOnchange}
                    />
                    <br/>
                    <button>Create Box</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;